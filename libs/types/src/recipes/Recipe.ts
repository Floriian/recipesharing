import { Ingredient } from "../ingredient";

export interface IRecipe {
  _id: any;
  name: string;
  kcal: number | string;
  glutenFree: boolean;
  description: string;
  ingredients: Ingredient[];
  createdAt: Date;
}
