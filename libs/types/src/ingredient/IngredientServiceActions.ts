import { IIngredient as Ingredient } from "./Ingredient";

export interface IngredientServiceActions {
  getIngredients(): Promise<Ingredient[]> | Ingredient[];
  getIngredient(name: string): Promise<Ingredient> | Ingredient;
  updateIngredient(id: string): Promise<Ingredient> | Ingredient;
  deleteIngredient(id: string): Promise<boolean> | boolean;
}
