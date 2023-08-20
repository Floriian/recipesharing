import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Model } from 'mongoose';
import { Ingredient } from 'src/ingredient/schema/Ingredients.schema';

@Schema()
export class Recipe {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  kcal: number;
  @Prop({ default: false })
  glutenFree: boolean;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }] })
  ingredients: Ingredient[];
}

export type RecipeDocument = HydratedDocument<Recipe>;
export type RecipeModel = Model<Recipe>;
export const RecipeSchema = SchemaFactory.createForClass(Recipe);
