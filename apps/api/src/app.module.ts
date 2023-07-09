import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseModuleConfig } from './config';

@Module({
  imports: [MongooseModule.forRootAsync(mongooseModuleConfig)],
})
export class AppModule {}
