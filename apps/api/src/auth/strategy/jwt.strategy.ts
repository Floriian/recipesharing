import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IAuth0Config } from '../../config';
import { AUTH_CONFIG } from '../../constants';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${
          configService.get<IAuth0Config>(AUTH_CONFIG).AUTH0_ISSUER_URL
        }.well-known/jwks.json`,
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: configService.get<IAuth0Config>(AUTH_CONFIG).AUTH0_AUDIENCE,
      issuer: configService.get<IAuth0Config>(AUTH_CONFIG).AUTH0_ISSUER_URL,
      algorithms: ['RS256'],
    });
  }
  validate(payload: unknown) {
    return payload;
  }
}
