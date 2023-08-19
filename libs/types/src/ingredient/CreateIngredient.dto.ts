import { IsEnum, IsNotEmpty, IsNumberString, IsString } from "class-validator";
import { UNITS, Units } from "./units";

export class CreateIngredientDto {
  @IsNumberString()
  @IsNotEmpty()
  amount: number;

  @IsEnum(UNITS)
  @IsNotEmpty()
  unit: Units;

  @IsString()
  @IsNotEmpty()
  name: string;
}
