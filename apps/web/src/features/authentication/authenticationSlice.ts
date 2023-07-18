import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/features/authentication/initialState";
import { AuthenticationType } from "@/features/authentication/types";
export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAccessToken: (
      state,
      { payload }: PayloadAction<{ accessToken: string }>
    ) => {
      state.accessToken = payload.accessToken;
    },

    setUserInfo: (
      state,
      { payload }: PayloadAction<Omit<AuthenticationType, "accessToken">>
    ) => {
      state.name = payload.name;
      state.sub = payload.sub;
    },

    resetAuthentication: (state) => {
      state = initialState;
    },
  },
});
export const { resetAuthentication, setAccessToken, setUserInfo } =
  authenticationSlice.actions;
