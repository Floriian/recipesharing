import { Prop, Schema } from '@nestjs/mongoose';
import { IRecipe } from '@recipe-sharing/types';
@Schema()
export class Recipe implements IRecipe {
  @Prop()
  name: string;

  @Prop()
  glutenFree: string;
}
