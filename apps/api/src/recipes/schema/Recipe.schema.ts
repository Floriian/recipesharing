import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IRecipe } from '@recipe-sharing/types';
import mongoose, { HydratedDocument, Model } from 'mongoose';

@Schema()
export class Recipe implements Omit<IRecipe, '_id'> {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  kcal: number;
  @Prop({ default: false })
  glutenFree: boolean;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  ingredients: string;

  @Prop({ required: true })
  createdAt: Date;
}

export type RecipeDocument = HydratedDocument<Recipe>;
export type RecipeModel = Model<Recipe>;
export const RecipeSchema = SchemaFactory.createForClass(Recipe);
