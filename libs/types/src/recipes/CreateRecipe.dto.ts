import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";
import { IIngredient } from "../ingredient/Ingredient";
import { IRecipe } from "./Recipe";

export class CreateRecipeDto implements Omit<IRecipe, "_id"> {
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
  ingredients: Omit<IIngredient, "_id">;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDate()
  @IsNotEmpty()
  createdAt: Date;
}
