import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  @UseGuards(JwtGuard)
  getRecipes(@Request() request: Request) {
    return {
      recipes: 'recipe',
    };
  }
}
