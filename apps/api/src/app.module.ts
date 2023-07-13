import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseModuleConfig } from './config';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { IngredientsModule } from './ingredients/ingredients.module';
import { RecipesModule } from './recipes/recipes.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRootAsync(mongooseModuleConfig),
    AuthModule,
    ConfigModule.forRoot(),
    IngredientsModule,
    RecipesModule,
    UserModule,
  ],
})
export class AppModule {}
