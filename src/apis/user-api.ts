import { User } from "@/types/user";
import baseApi from "./client";

export const getUsers = async () => {
  return baseApi<User[]>({
    url: "/users",
    method: "GET",
  });
};
