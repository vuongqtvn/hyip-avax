import { User } from "@/types/user";
import baseApi from "./client";
import { AuthReponse, LoginBody, RegisterBody } from "@/types/auth";

export const login = async (data: LoginBody) => {
  return baseApi<AuthReponse>({
    url: "/auth/login",
    method: "POST",
    data,
  });
};

export const register = async (data: RegisterBody) => {
  return baseApi<AuthReponse>({
    url: "/auth/register",
    method: "POST",
    data,
  });
};

export const getMe = async () => {
  return baseApi<{
    user: User;
  }>({
    url: "/auth/me",
    method: "GET",
  });
};

export const refreshToken = async (refreshToken: string) => {
  return baseApi<AuthReponse>({
    url: "/auth/refresh_token",
    method: "POST",
    data: {
      refreshToken,
    },
  });
};
