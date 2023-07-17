import { IsNotEmpty, IsString } from "class-validator";
import { IIngredient } from "./Ingredient";

export class CreateIngredientDto implements Omit<IIngredient, "_id"> {
  @IsString()
  @IsNotEmpty()
  ingredients: string;
}
