import { recipeSlice } from "@/features/Recipe/recipe.slice";
import { userSlice } from "@/features/User/user.slice";
import { authenticationSlice } from "@/features/authentication/authenticationSlice";
import { combineReducers } from "@reduxjs/toolkit";
export const rootReducer = combineReducers({
  [recipeSlice.name]: recipeSlice.reducer,
  [authenticationSlice.name]: authenticationSlice.reducer,
  [userSlice.name]: userSlice.reducer,
});
