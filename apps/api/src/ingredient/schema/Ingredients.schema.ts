import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { Units } from '@recipe-sharing/types';
@Schema()
export class Ingredient {
  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  unit: Units;

  @Prop({ required: true })
  name: string;
}

export type IngredientDocument = HydratedDocument<Ingredient>;
export type IngredientModel = Model<Ingredient>;
export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
