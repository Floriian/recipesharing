import {
  Controller,
  Get,
  NotImplementedException,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { BaseResponseInterceptor } from '../interceptors';
import { GetUser } from '../decorators';

@Controller('recipes')
@UseInterceptors(BaseResponseInterceptor)
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  @UseGuards(JwtGuard)
  getRecipes(@Request() request: Express.Request, @GetUser() user: any) {
    console.log(user);
    return {
      recipes: 'recipe',
    };
  }

  @UseGuards(JwtGuard)
  @Post()
  createRecipe() {
    throw new NotImplementedException('');
  }
}
