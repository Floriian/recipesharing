import { IUser } from "@recipe-sharing/types";

interface InitialState<T> {
  isLoading: boolean;
  data: T;
  error?: any;
}

export const initialState: InitialState<IUser> = {
  isLoading: false,
  data: {
    name: "",
    recipes: [],
    sub: "",
  },
  error: null,
};
