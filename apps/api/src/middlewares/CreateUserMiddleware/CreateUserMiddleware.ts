import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserModel } from '../../user/schema/User.schema';
import { Request } from 'express';

@Injectable()
/**
 * Middleware for if user not exists in a database, create it.
 */
export class CreateUserMiddleware implements NestMiddleware {
  constructor(@InjectModel(User.name) private readonly userModel: UserModel) {}
  async use(req: Request, res: any, next: () => void) {
    const { sub, name } = req.headers;

    if (sub && name) {
      const user = await this.userModel.findOne({ sub, name });

      if (!user) {
        await this.userModel.create({ sub, name });
      }
    }

    next();
  }
}
