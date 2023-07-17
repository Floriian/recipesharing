import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: 'sub' | 'name' | undefined, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();

    if (data) {
      return req.headers[data];
    }

    return {
      sub: req.headers['sub'],
      name: req.headers['name'],
    };
  },
);
