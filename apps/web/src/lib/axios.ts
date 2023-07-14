import axios from "axios";
import { store } from "../app/store/store";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

axiosInstance.interceptors.request.use(
  (req) => {
    const { auth } = store.getState();

    if (auth) {
      req.headers.sub = auth.sub;
      req.headers.name = auth.name;
      req.headers.Authorization = `Bearer ${auth.accessToken}`;
    }

    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);
