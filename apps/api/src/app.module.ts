import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseModuleConfig } from './config';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync(mongooseModuleConfig),
    AuthModule,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
