import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CreateRecipeDto,
  IUser,
  RecipeServiceActions,
  UpdateRecipeDto,
} from '@recipe-sharing/types';
import { Recipe, RecipeModel } from './schema/Recipe.schema';
import { RecipeNotFoundException } from './exceptions';
import { Auth0Payload } from 'src/types';
import { UserService } from 'src/user/user.service';
@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name) private readonly recipeModel: RecipeModel,
    private readonly userService: UserService,
  ) {}
  async getRecipes(): Promise<Recipe[]> {
    const recipes = await this.recipeModel
      .find()
      .sort({ createdAt: 1 })
      .limit(10);
    return recipes;
  }
  async getRecipe(id: string): Promise<Recipe> {
    try {
      const recipe = await this.recipeModel
        .findById(id)
        .populate('ingredients');
      if (!recipe) throw new RecipeNotFoundException();
      return recipe;
    } catch (e) {
      throw new RecipeNotFoundException();
    }
  }
  async createRecipe(
    user: Auth0Payload,
    dto: CreateRecipeDto,
  ): Promise<Recipe> {
    // const { _id } = await this.userService.getUserBySub(user.sub);

    const recipe = await this.recipeModel.create({
      ...dto,
      createdAt: Date.now(),
      // user: {
      //   _id,
      // },
    });
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
