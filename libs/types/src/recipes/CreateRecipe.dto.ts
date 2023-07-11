import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";
import { IIngredient } from "../ingredient/Ingredient";
import { IRecipe } from "./Recipe";

export class CreateRecipeDto implements IRecipe {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  kcal: number;

  @IsBoolean()
  @IsNotEmpty()
  glutenFree: boolean;

  @IsArray()
  @IsNotEmpty()
  ingredients: IIngredient[];

  @IsString()
  @IsNotEmpty()
  description: string;
}
