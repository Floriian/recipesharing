import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseModuleConfig } from './config';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    MongooseModule.forRootAsync(mongooseModuleConfig),
    AuthModule,
    ConfigModule.forRoot(),
    RecipesModule,
  ],
})
export class AppModule {}
