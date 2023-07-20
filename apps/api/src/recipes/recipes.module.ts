import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Recipe, RecipeSchema } from './schema/Recipe.schema';
import { UserModule } from 'src/user/user.module';
@Module({
  controllers: [RecipesController],
  providers: [RecipesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Recipe.name,
        schema: RecipeSchema,
      },
    ]),
    UserModule,
  ],
})
export class RecipesModule {}
