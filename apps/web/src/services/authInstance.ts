import { store } from "@/app/store/store";
import axios from "axios";
export const authInstance = axios.create({
  baseURL: "http://localhost:3000",
});

authInstance.interceptors.request.use((conf) => {
  const state = store.getState();

  conf.headers.Authorization = `Bearer ${state.authentication.accessToken}`;

  return conf;
});
