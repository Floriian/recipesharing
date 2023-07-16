import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/features/authentication/initialState";
import { AuthenticationType } from "@/features/authentication/types";
export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAuthenticationState: (
      state,
      { payload }: PayloadAction<AuthenticationType>
    ) => {
      state.accessToken = payload.accessToken;
      state.name = state.name;
      state.sub = state.sub;
    },
    resetAuthentication: (state) => {
      state.accessToken = initialState.accessToken;
      state.name = initialState.name;
      state.sub = initialState.sub;
    },
  },
});
export const { resetAuthentication, setAuthenticationState } =
  authenticationSlice.actions;
