import { CreateIngredientDto } from "./CreateIngredient.dto";
import { UpdateIngredientDto } from "./UpdateIngredient.dto";
export interface IngredientServiceActions {
  getIngredients();
  getIngredient(name: string);
  createIngredient(dto: CreateIngredientDto);
  updateIngredient(id: string, dto: UpdateIngredientDto);
  deleteIngredient(id: string);
}
