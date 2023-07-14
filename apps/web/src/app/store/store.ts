import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../features";
import { modalSlice } from "../../features/modal";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
