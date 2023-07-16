import { recipeSlice } from "@/features/Recipe/recipe.slice";
import { combineReducers } from "@reduxjs/toolkit";
export const rootReducer = combineReducers({
  [recipeSlice.name]: recipeSlice.reducer,
});
