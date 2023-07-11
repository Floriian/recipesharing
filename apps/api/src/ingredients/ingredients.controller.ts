import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import {
  CreateIngredientDto,
  IngredientServiceActions,
  UpdateIngredientDto,
} from '@recipe-sharing/types';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get()
  getIngredients() {
    return this.ingredientsService.getIngredients();
  }

  @Get(':name')
  getIngredient(@Param('name') name: string) {
    return this.getIngredient(name);
  }

  @Post()
  createIngredeint(@Body() dto: CreateIngredientDto) {
    return this.createIngredeint(dto);
  }
}
