import { userService } from "@/services/user.service";
import { BaseResponse } from "@/types";
import { IUser } from "@recipe-sharing/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserThunk = createAsyncThunk<BaseResponse<IUser>, void>(
  "user/getUser",
  async (_, api) => {
    try {
      const res = await userService.getUser();
      return res;
    } catch (e) {
      const { rejectWithValue } = api;
      return rejectWithValue({
        error: e,
        success: false,
      });
    }
  }
);
