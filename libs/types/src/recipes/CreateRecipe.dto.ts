import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumberString,
  IsString,
  ValidateNested,
} from "class-validator";
import { CreateIngredientDto } from "../ingredient";
import { Type } from "class-transformer";

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumberString()
  @IsNotEmpty()
  kcal: string;

  @IsBoolean()
  @IsNotEmpty()
  glutenFree: boolean;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateIngredientDto)
  ingredients: CreateIngredientDto[];
}
