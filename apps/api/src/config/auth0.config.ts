import { registerAs } from '@nestjs/config';

export const auth0Config = registerAs('auth0Config', () => ({
  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
  AUTH0_ISSUER_URL: process.env.AUTH0_ISSUER_URL,
}));
