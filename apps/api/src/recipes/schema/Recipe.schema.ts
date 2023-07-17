import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IIngredient, IRecipe } from '@recipe-sharing/types';
import mongoose, { HydratedDocument, Model } from 'mongoose';
import { Ingredient } from '../../ingredients/schema/Ingredient.schema';

@Schema()
export class Recipe implements Omit<IRecipe, '_id'> {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  kcal: number;
  @Prop({ default: false })
  glutenFree: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Ingredient.name })
  ingredients: IIngredient;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  createdAt: Date;
}

export type RecipeDocument = HydratedDocument<Recipe>;
export type RecipeModel = Model<Recipe>;
export const RecipeSchema = SchemaFactory.createForClass(Recipe);
