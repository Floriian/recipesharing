import {
  IsBoolean,
  IsNotEmpty,
  IsNumberString,
  IsString,
} from "class-validator";

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

  @IsString()
  @IsNotEmpty()
  ingredients: string;
}
