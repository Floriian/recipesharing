import { IRecipe } from "../recipes";

export interface IUser {
  sub: string;
  recipes: IRecipe[];
}
