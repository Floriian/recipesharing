import { ingredientsService } from "@/services/ingredients.service";
import { BaseResponse } from "@/types";
import { IIngredient } from "@recipe-sharing/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getIngredientThunk = createAsyncThunk<
  BaseResponse<IIngredient[]>,
  void
>("ingredients/getIngredients", async (_, api) => {
  try {
    const res = await ingredientsService.getIngredients();
    return res.data;
  } catch (e) {
    console.log(e);
    const { rejectWithValue } = api;
    return rejectWithValue({
      error: e,
      success: false,
    });
  }
});
