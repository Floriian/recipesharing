import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateIngredientDto } from '@recipe-sharing/types';
import { Ingredient, IngredientModel } from './schema/Ingredients.schema';

@Injectable()
export class IngredientService {
  constructor(
    @InjectModel(Ingredient.name)
    private readonly ingredientModel: IngredientModel,
  ) {}

  async createIngredients(dto: CreateIngredientDto[]) {
    try {
      return await this.ingredientModel.insertMany(dto);
    } catch (e) {
      console.log(e);
    }
  }
}
