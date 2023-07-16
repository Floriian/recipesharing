import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/features/Ingredients/initialState";
import { getIngredientThunk } from "@/features/Ingredients/ingredients.thunk";
import { getRecipeThunk } from "@/features/Recipe/recipe.thunks";
export const ingredientsSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getIngredientThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecipeThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
      })
      .addCase(getIngredientThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
