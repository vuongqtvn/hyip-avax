import axios, { Method, ResponseType } from "axios";
import Router from "next/router";
import cookie from "react-cookies";

import { authApi } from ".";

const baseURL =
  `${process.env.ENDPOINT_GATEWAY}${process.env.API_PREFIX}` ||
  "http://localhost:5000/api/v1";

const client = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(
  (config) => {
    const token = cookie.load("access_token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const refreshAccessToken = async () => {
  try {
    const refreshToken = cookie.load("refresh_token");
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    const data = await authApi.refreshToken(refreshToken);

    const accessToken = data.accessToken;

    cookie.save("access_token", accessToken, { path: "/" });
  } catch (error) {
    cookie.remove("access_token");
    cookie.remove("refresh_token");
    Router.replace("/auth/login");
    // toast.error("Hết thời gian truy cập");
  }
};

client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const config = error.config;

    if (error.response && error.response.status === 401 && !config._retry) {
      config._retry = true;
      await refreshAccessToken();

      return client(config);
    }

    if (typeof error?.response?.data?.message === "string") {
      // toast.error(error?.response?.data?.message);
    }

    return Promise.reject(error);
  }
);

interface IPramsRequest {
  url: string;
  method: Method;
  headers?: any;
  data?: any;
  params?: any;
  responseType?: ResponseType;
}

export default async function baseApi<T>({
  url,
  method,
  headers,
  data,
  params,
  responseType,
}: IPramsRequest): Promise<T> {
  return new Promise((resolve, reject) => {
    client({
      url,
      method,
      headers: {
        Authorization: "Bearer " + cookie.load("access_token"),
        ...headers,
      },
      params,
      data,
      responseType,
    })
      .then(({ data }: { data: T }) => {
        resolve(data);
      })
      .catch((e) =>
        reject({ ...e.response?.data, statusCode: e.response?.status })
      );
  });
}
