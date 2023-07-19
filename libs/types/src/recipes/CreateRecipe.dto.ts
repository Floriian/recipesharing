import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";
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

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  ingredients: string;

  @IsDate()
  @IsNotEmpty()
  createdAt: Date;
}
