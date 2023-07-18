import { IIngredient } from "../ingredient/Ingredient";

export interface IRecipe {
  _id: any;
  name: string;
  kcal: number;
  glutenFree: boolean;
  ingredients: Omit<IIngredient, "_id">;
  description: string;
  createdAt: Date;
}
