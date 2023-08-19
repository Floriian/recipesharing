import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredientService } from 'src/ingredient/ingredient.service';
import {
  Ingredient,
  IngredientSchema,
} from 'src/ingredient/schema/Ingredients.schema';

@Module({
  providers: [IngredientService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Ingredient.name,
        schema: IngredientSchema,
      },
    ]),
  ],
  exports: [IngredientService],
})
export class IngredientModule {}
