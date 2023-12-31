import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRecipeDto, UpdateRecipeDto } from '@recipe-sharing/types';
import { Recipe, RecipeModel } from './schema/Recipe.schema';
import { RecipeNotFoundException } from './exceptions';
import { Auth0Payload } from 'src/types';
import { UserService } from 'src/user/user.service';
import { IngredientService } from 'src/ingredient/ingredient.service';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name) private readonly recipeModel: RecipeModel,
    private readonly userService: UserService,
    private readonly ingredientService: IngredientService,
  ) {}
  async getRecipes(): Promise<Recipe[]> {
    const recipes = await this.recipeModel
      .find()
      .sort({ createdAt: -1 })
      .limit(10)
      .populate('ingredients');
    return recipes;
  }
  async getRecipe(id: string): Promise<Recipe> {
    try {
      const recipe = await this.recipeModel
        .findById(id)
        .populate('ingredients')
        .exec();
      console.log({ recipe });
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
    const { ingredients } = dto;

    const createIngredients = await this.ingredientService.createIngredients(
      ingredients,
    );

    const userDocument = await this.userService.getUserBySub(user.sub);

    const recipe = await this.recipeModel.create({
      ...dto,
      ingredients: createIngredients,
      createdAt: Date.now(),
    });

    userDocument.recipes.push(recipe);
    userDocument.save();

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
