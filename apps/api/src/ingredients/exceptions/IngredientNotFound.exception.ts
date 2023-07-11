import { NotFoundException } from '@nestjs/common';

export class IngredientNotFoundException extends NotFoundException {
  constructor() {
    super({
      message: 'Ingredient not found.',
    });
  }
}
