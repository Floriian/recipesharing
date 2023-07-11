import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { validationPipeConfig } from './config';
import { BaseResponseInterceptor } from './interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe(validationPipeConfig));

  app.useGlobalInterceptors(new BaseResponseInterceptor());

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
