import { IUser } from "@recipe-sharing/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  sub: string;
  name: string;
};

const initialState: AuthState = {
  sub: "",
  name: "",
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
    setUser: (state, { payload }: PayloadAction<AuthState>) => {
      (state.name = payload.name), (state.sub = payload.sub);
    },
  },
});

export const { setSub, setName, setUser } = authSlice.actions;
