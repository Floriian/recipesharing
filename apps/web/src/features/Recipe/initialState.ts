import { type InitialState } from "@/types";
import { IRecipe } from "@recipe-sharing/types";
export const initialState: InitialState<IRecipe> = {
  isLoading: false,
  data: [],
  error: null,
};
