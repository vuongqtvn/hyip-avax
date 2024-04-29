import Router from "next/router";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import cookie from "react-cookies";

import { authApi } from "@/apis";
import { LoginBody, RegisterBody } from "@/types/auth";
import { User } from "@/types/user";

interface Context {
  loading: boolean;
  isAuth: boolean;
  user: User | null;
  login: (body: LoginBody) => Promise<void>;
  logout: () => void;
  register: (body: RegisterBody) => Promise<void>;
}

const AuthContext = createContext<Context>({
  isAuth: false,
  loading: true,
  user: null,
  login: () => new Promise((relsove) => relsove()),
  logout: () => {},
  register: () => new Promise((relsove) => relsove()),
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function getMe() {
    try {
      if (cookie.load("access_token")) {
        const data = await authApi.getMe();

        if (data?.user) setUser(data?.user);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  const login = async (body: LoginBody) => {
    const data = await authApi.login(body);

    Router.replace("/");
    cookie.save("access_token", data?.accessToken, {
      path: "/",
      maxAge: 60 * 60 * 24,
    });
    cookie.save("refresh_token", data?.refreshToken, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    setUser(data?.user);
  };

  const register = async (body: RegisterBody) => {
    const data = await authApi.register(body);

    Router.replace("/");
    cookie.save("access_token", data?.accessToken, {
      path: "/",
      maxAge: 60 * 60 * 24,
    });
    cookie.save("refresh_token", data?.refreshToken, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    setUser(data?.user);
  };

  const logout = () => {
    cookie.remove("access_token");
    cookie.remove("refresh_token");
    setUser(null);
    Router.replace("/auth/login");
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
        isAuth: !!user,
        user,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
