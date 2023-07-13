import { IRecipe } from "../recipes";

export interface IUser {
  sub: string;
  name: string;
  recipes: IRecipe[];
}
