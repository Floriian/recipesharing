import { IUser } from "../user";
import { CreateIngredientDto } from "./CreateIngredient.dto";
import { UpdateIngredientDto } from "./UpdateIngredient.dto";
export interface IngredientServiceActions {
  getIngredients();
  getIngredient(name: string);
  createIngredient(user: IUser, dto: CreateIngredientDto);
  updateIngredient(id: string, dto: UpdateIngredientDto);
  deleteIngredient(id: string);
}
