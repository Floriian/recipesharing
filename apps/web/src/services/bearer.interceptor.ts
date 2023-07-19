import { store } from "@/app/store/store";
import { injectStore } from "@/lib/injectStore";
import { InternalAxiosRequestConfig } from "axios";

injectStore(store);

export const bearerInterceptor = (conf: InternalAxiosRequestConfig) => {
  const authState = store.getState().authentication;

  if (authState) {
    conf.headers.Authorization = `Bearer ${authState.accessToken}`;
    return conf;
  }

  return conf;
};
