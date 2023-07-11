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
import { IngredientsService } from './ingredients.service';
import {
  CreateIngredientDto,
  IngredientServiceActions,
  UpdateIngredientDto,
} from '@recipe-sharing/types';
import { JwtGuard } from '../auth/guards/jwt.guard';

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

  @UseGuards(JwtGuard)
  @Post()
  createIngredient(@Body() dto: CreateIngredientDto) {
    return this.ingredientsService.createIngredient(dto);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  updateIngredient(@Param('id') id: string, @Body() dto: UpdateIngredientDto) {
    return this.ingredientsService.updateIngredient(id, dto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  deleteIngredient(@Param('id') id: string) {
    return this.ingredientsService.deleteIngredient(id);
  }
}
