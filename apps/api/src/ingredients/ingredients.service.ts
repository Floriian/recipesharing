import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CreateIngredientDto,
  IUser,
  IngredientServiceActions,
  UpdateIngredientDto,
} from '@recipe-sharing/types';
import { Ingredient, IngredientModel } from './schema/Ingredient.schema';
import { IngredientNotFoundException } from './exceptions';

@Injectable()
export class IngredientsService implements IngredientServiceActions {
  constructor(
    @InjectModel(Ingredient.name)
    private readonly ingredientModel: IngredientModel,
  ) {}
  async getIngredients(): Promise<Ingredient[]> {
    return await this.ingredientModel.find();
  }
  async getIngredient(name: string): Promise<Ingredient[]> {
    const ingredient = await this.ingredientModel.find({ name });
    if (!ingredient) throw new IngredientNotFoundException();
    return ingredient;
  }
  async createIngredient(
    user: IUser,
    dto: CreateIngredientDto,
  ): Promise<Ingredient> {
    const newIngredient = new Ingredient();
    newIngredient.ingredients = dto.ingredients;

    await this.ingredientModel.create(newIngredient);
    return newIngredient;
  }
  async updateIngredient(
    id: string,
    dto: UpdateIngredientDto,
  ): Promise<Ingredient> {
    const ingredient = await this.ingredientModel.findById(id);
    if (!ingredient) throw new IngredientNotFoundException();

    return await this.ingredientModel.findOneAndUpdate(
      { _id: id },
      { $set: { ingredients: dto.ingredients } },
    );
  }
  async deleteIngredient(id: string) {
    const ingredient = await this.ingredientModel.findById(id);
    if (!ingredient) throw new IngredientNotFoundException();

    return await this.ingredientModel.findOneAndDelete({ _id: id });
  }
}
