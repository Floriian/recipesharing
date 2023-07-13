import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IRecipe, IUser } from '@recipe-sharing/types';
import mongoose, { HydratedDocument, Model } from 'mongoose';
import { Recipe } from '../../recipes/schema/Recipe.schema';

@Schema()
export class User implements IUser {
  @Prop({ required: true })
  sub: string;

  @Prop({ required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Recipe.name })
  recipes: IRecipe[];
}

export type UserDocument = HydratedDocument<User>;
export type UserModel = Model<User>;
export const UserSchema = SchemaFactory.createForClass(User);
