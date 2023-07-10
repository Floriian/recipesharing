import { IsNotEmpty, IsString } from "class-validator";

export class CreateRecipeDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
