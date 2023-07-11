import { NotFoundException } from '@nestjs/common';

export class RecipeNotFoundException extends NotFoundException {
  constructor() {
    super({
      message: 'Recipe not found.',
    });
  }
}
