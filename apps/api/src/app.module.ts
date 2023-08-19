import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseModuleConfig } from './config';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RecipesModule } from './recipes/recipes.module';
import { UserModule } from './user/user.module';
import { CreateUserMiddleware } from './middlewares/CreateUserMiddleware/CreateUserMiddleware';
import { IngredientModule } from 'src/ingredient/ingredient.module';
@Module({
  imports: [
    MongooseModule.forRootAsync(mongooseModuleConfig),
    AuthModule,
    ConfigModule.forRoot(),
    RecipesModule,
    UserModule,
    IngredientModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CreateUserMiddleware).forRoutes('*');
  }
}
