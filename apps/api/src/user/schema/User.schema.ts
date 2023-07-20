import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Model } from 'mongoose';
import { Recipe } from '../../recipes/schema/Recipe.schema';

@Schema()
export class User {
  @Prop({ required: true })
  sub: string;

  @Prop({ required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'recipes' })
  recipes: Recipe[];
}

export type UserDocument = HydratedDocument<User>;
export type UserModel = Model<User>;
export const UserSchema = SchemaFactory.createForClass(User);
