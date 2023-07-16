import { ingredientsSlice } from "@/features/Ingredients/ingredients.slice";
import { recipeSlice } from "@/features/Recipe/recipe.slice";
import { authenticationSlice } from "@/features/authentication/authenticationSlice";
import { combineReducers } from "@reduxjs/toolkit";
export const rootReducer = combineReducers({
  [recipeSlice.name]: recipeSlice.reducer,
  [ingredientsSlice.name]: ingredientsSlice.reducer,
  [authenticationSlice.name]: authenticationSlice.reducer,
});
