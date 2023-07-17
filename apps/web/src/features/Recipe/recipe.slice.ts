import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/features/Recipe/initialState";
import { getRecipeThunk } from "@/features/Recipe/recipe.thunks";
export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRecipeThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecipeThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
      })
      .addCase(getRecipeThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
