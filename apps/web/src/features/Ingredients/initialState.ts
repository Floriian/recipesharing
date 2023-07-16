import { InitialState } from "@/types";
import { IIngredient } from "@recipe-sharing/types";

export const initialState: InitialState<IIngredient> = {
  isLoading: false,
  data: [],
  error: null,
};
