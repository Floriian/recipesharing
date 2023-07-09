import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { auth0Config } from '../config';

@Module({
  imports: [ConfigModule.forFeature(auth0Config)],
})
export class AuthModule {}
