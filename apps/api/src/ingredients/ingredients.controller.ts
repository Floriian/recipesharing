import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {
  CreateIngredientDto,
  IngredientServiceActions,
  UpdateIngredientDto,
} from '@recipe-sharing/types';
import { IngredientsService } from './ingredients.service';

@Controller('ingredients')
export class IngredientsController implements IngredientServiceActions {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get()
  getIngredients() {
    return this.ingredientsService.getIngredients();
  }

  @Get(':name')
  getIngredient(@Param('name') name: string) {
    return this.ingredientsService.getIngredient(name);
  }

  @Post()
  createIngredient(dto: CreateIngredientDto) {
    return this.ingredientsService.createIngredient(dto);
  }
  @Patch(':id')
  updateIngredient(@Param('id') id: string, dto: UpdateIngredientDto) {
    return this.ingredientsService.updateIngredient(id, dto);
  }
  @Delete(':id')
  deleteIngredient(@Param('id') id: string) {
    return this.ingredientsService.deleteIngredient(id);
  }
}
