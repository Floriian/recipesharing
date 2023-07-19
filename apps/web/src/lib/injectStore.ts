import { store as appStore } from "@/app/store/store";
type AppStore = typeof appStore;
let store: AppStore;

export const injectStore = (_store: any) => {
  store = _store;
};
