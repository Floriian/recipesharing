import { IIngredient } from "../ingredient/Ingredient";

export interface IRecipe {
  name: string;
  kcal: number;
  glutenFree: boolean;
  ingredients: IIngredient[];
  description: string;
}
