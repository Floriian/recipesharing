import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseModuleConfig } from './config';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RecipesModule } from './recipes/recipes.module';
import { UserModule } from './user/user.module';
import { CreateUserMiddleware } from './middlewares/CreateUserMiddleware/CreateUserMiddleware';

@Module({
  imports: [
    MongooseModule.forRootAsync(mongooseModuleConfig),
    AuthModule,
    ConfigModule.forRoot(),
    RecipesModule,
    UserModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CreateUserMiddleware).forRoutes('*');
  }
}
