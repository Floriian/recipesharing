import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/features/User/initialState";
import { getUserThunk } from "@/features/User/user.thunk";
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
      })
      .addCase(getUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
