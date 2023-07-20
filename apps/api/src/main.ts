import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { validationPipeConfig } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe(validationPipeConfig));

  app.enableCors();

  const port = 3000 || process.env.PORT;

  await app.listen(port);
  Logger.log(`Server is listening at port ${port}`);
}
bootstrap();
