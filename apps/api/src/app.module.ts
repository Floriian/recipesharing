import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseModuleConfig } from './config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRootAsync(mongooseModuleConfig), AuthModule],
})
export class AppModule {}
