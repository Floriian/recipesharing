import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/features/Recipe/initialState";
import { getRecipeThunk } from "@/features/Recipe/recipe.thunks";
import { IRecipe } from "@recipe-sharing/types";
export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addIngredient: (state, { payload }: PayloadAction<IRecipe>) => {
      state.data.push(payload);
    },
  },
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

export const { addIngredient } = recipeSlice.actions;
