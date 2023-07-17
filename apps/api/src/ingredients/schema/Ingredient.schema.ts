import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IIngredient } from '@recipe-sharing/types';
import { HydratedDocument, Model } from 'mongoose';
@Schema()
export class Ingredient implements Omit<IIngredient, '_id'> {
  @Prop({ required: true })
  ingredients: string;
}
export type IngredientDocument = HydratedDocument<Ingredient>;
export type IngredientModel = Model<Ingredient>;
export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
