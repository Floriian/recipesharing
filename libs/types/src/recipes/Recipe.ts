import { IIngredient } from "../ingredient/Ingredient";

export interface IRecipe {
  _id: any;
  name: string;
  kcal: number;
  glutenFree: boolean;
  ingredients: IIngredient;
  description: string;
  createdAt: Date;
}
