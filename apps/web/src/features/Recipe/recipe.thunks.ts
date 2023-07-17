import { recipeService } from "@/services/recipe.service";
import { BaseResponse } from "@/types";
import { IRecipe } from "@recipe-sharing/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRecipeThunk = createAsyncThunk<BaseResponse<IRecipe[]>, void>(
  "recipes/getRecipes",
  async (_, api) => {
    try {
      const res = await recipeService.getRecipes();
      return res.data;
    } catch (e) {
      const { rejectWithValue } = api;
      return rejectWithValue({
        error: e,
        success: false,
      });
    }
  }
);
