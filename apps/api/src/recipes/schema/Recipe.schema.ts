import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Model } from 'mongoose';
import { User } from 'src/user/schema/User.schema';

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
  ingredients: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'users' })
  user: User;
}

export type RecipeDocument = HydratedDocument<Recipe>;
export type RecipeModel = Model<Recipe>;
export const RecipeSchema = SchemaFactory.createForClass(Recipe);
