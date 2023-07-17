import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import {
  CreateRecipeDto,
  IUser,
  RecipeServiceActions,
  UpdateRecipeDto,
} from '@recipe-sharing/types';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { GetUser } from '../decorators';

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
  @UseGuards(JwtGuard)
  createRecipe(@GetUser() user: IUser, @Body() dto: CreateRecipeDto) {
    return this.recipesService.createRecipe(user, dto);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  updateRecipe(@Param('id') id: string, @Body() dto: UpdateRecipeDto) {
    return this.recipesService.updateRecipe(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  deleteRecipe(@Param('id') id: string) {
    return this.recipesService.deleteRecipe(id);
  }
}
