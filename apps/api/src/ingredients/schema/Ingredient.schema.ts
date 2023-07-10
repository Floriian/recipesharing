import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IIngredient } from '@recipe-sharing/types';
import { HydratedDocument, Model } from 'mongoose';
@Schema()
export class Ingredient implements IIngredient {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  amount: string;
}
export type IngredientDocument = HydratedDocument<Ingredient>;
export type IngredientModel = Model<Ingredient>;
export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
