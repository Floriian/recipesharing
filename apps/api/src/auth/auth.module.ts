import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { auth0Config } from '../config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forFeature(auth0Config),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [JwtStrategy],
})
export class AuthModule {}
