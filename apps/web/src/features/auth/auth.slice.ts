import { IUser } from "@recipe-sharing/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  sub: string;
  name: string;
  accessToken: string;
};

const initialState: AuthState = {
  sub: "",
  name: "",
  accessToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSub: (state, { payload }: PayloadAction<{ sub: string }>) => {
      state.sub = payload.sub;
    },
    setName: (state, { payload }: PayloadAction<{ name: string }>) => {
      state.name = payload.name;
    },
    setToken: (state, { payload }: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = payload.accessToken;
    },
    setAuthInfo: (state, { payload }: PayloadAction<AuthState>) => {
      (state.name = payload.name), (state.sub = payload.sub);
    },
    resetAuth: (state) => {
      state.sub = initialState.sub;
      state.name = initialState.name;
    },
  },
});

export const { setSub, setName, setAuthInfo, resetAuth } = authSlice.actions;
