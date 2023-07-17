import { IsNotEmpty, IsString } from "class-validator";
import { IIngredient } from "./Ingredient";

export class CreateIngredientDto implements IIngredient {
  @IsString()
  @IsNotEmpty()
  ingredients: string;
}
