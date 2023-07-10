import { IsNotEmpty, IsString } from "class-validator";
import { IIngredient } from "./Ingredient";

export class CreateIngredientDto implements IIngredient {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  amount: string;
}
