import { InitialState } from "@/types";
import { IIngredient } from "@recipe-sharing/types";

export const initialState: InitialState<IIngredient> = {
  isLoading: false,
  data: { ingredients: "", _id: "" },
  error: null,
};
