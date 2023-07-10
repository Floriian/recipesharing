import { registerAs } from '@nestjs/config';

export const auth0Config = registerAs<IAuth0Config>('auth0Config', () => ({
  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
  AUTH0_ISSUER_URL: process.env.AUTH0_ISSUER_URL,
}));

export interface IAuth0Config {
  AUTH0_AUDIENCE: string;
  AUTH0_ISSUER_URL: string;
}
