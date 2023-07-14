import { IUser } from "../user";
import { CreateRecipeDto } from "./CreateRecipe.dto";
import { UpdateRecipeDto } from "./UpdateRecipe.dto";

export interface RecipeServiceActions {
  getRecipes();
  getRecipe(id: string);
  createRecipe(user: IUser, dto: CreateRecipeDto);
  updateRecipe(id: string, dto: UpdateRecipeDto);
  deleteRecipe(id: string);
}
