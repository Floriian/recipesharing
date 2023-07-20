import { store as appStore } from "@/app/store/store";
import { InternalAxiosRequestConfig } from "axios";

type AppStore = typeof appStore;
let store: AppStore;

export const injectStore = (_store: any) => {
  store = _store;
};

export const bearerInterceptor = (conf: InternalAxiosRequestConfig) => {
  const authState = store.getState().authentication;

  if (authState) {
    conf.headers.Authorization = `Bearer ${authState.accessToken}`;
    conf.headers["sub"] = authState.sub;
    conf.headers["name"] = authState.name;
    return conf;
  }

  return conf;
};
