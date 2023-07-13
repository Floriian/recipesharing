import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CreateRecipeDto,
  RecipeServiceActions,
  UpdateRecipeDto,
} from '@recipe-sharing/types';
import { Recipe, RecipeModel } from './schema/Recipe.schema';
import { Ingredient } from '../ingredients/schema/Ingredient.schema';
import { RecipeNotFoundException } from './exceptions';
@Injectable()
export class RecipesService implements RecipeServiceActions {
  constructor(
    @InjectModel(Recipe.name) private readonly recipeModel: RecipeModel,
  ) {}
  async getRecipes(): Promise<Recipe[]> {
    const recipes = await this.recipeModel.find().sort({ createdAt: 1 });
    return recipes;
  }
  async getRecipe(id: string): Promise<Recipe> {
    const recipe = await this.recipeModel
      .findById(id)
      .populate(Ingredient.name);
    if (!recipe) throw new RecipeNotFoundException();
    return recipe;
  }
  async createRecipe(dto: CreateRecipeDto): Promise<Recipe> {
    const recipe = await this.recipeModel.create({ dto });
    return await recipe.save();
  }
  async updateRecipe(id: string, dto: UpdateRecipeDto) {
    await this.getRecipe(id);

    const recipe = await this.recipeModel.findByIdAndUpdate(id, {
      $set: {
        dto,
      },
    });
    return recipe;
  }
  async deleteRecipe(id: string) {
    await this.getRecipe(id);

    return await this.recipeModel.findOneAndDelete({ _id: id });
  }
}
