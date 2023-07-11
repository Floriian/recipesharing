import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import {
  CreateRecipeDto,
  RecipeServiceActions,
  UpdateRecipeDto,
} from '@recipe-sharing/types';

@Controller('recipes')
export class RecipesController implements RecipeServiceActions {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  getRecipes() {
    return this.recipesService.getRecipes();
  }

  @Get(':id')
  getRecipe(@Param('id') id: string) {
    return this.recipesService.getRecipe(id);
  }

  @Post()
  createRecipe(dto: CreateRecipeDto) {
    return this.recipesService.createRecipe(dto);
  }

  @Patch(':id')
  updateRecipe(@Param('id') id: string, @Body() dto: UpdateRecipeDto) {
    return this.recipesService.updateRecipe(id, dto);
  }
  @Delete(':id')
  deleteRecipe(@Param('id') id: string) {
    return this.recipesService.deleteRecipe(id);
  }
}
