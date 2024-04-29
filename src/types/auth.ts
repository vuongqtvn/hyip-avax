import { User } from "./user";

export interface LoginBody {
  email: string;
  password: string;
}

export interface RegisterBody {
  username: string;
  email: string;
  password: string;
}

export interface AuthReponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}
