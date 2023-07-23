import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserModel } from './schema/User.schema';
import { UserNotFoundException } from 'src/user/exceptions/UserNotFoundException';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: UserModel) {}

  async getUserBySub(sub: string) {
    const user = await this.userModel.findOne({ sub });
    return user;
  }
  /**
   * TODO: refactor usermiddleware or the schema, because user created by 'name' header.
   */

  async getUserByEmail(email: string, includeRecipes: string) {
    const user = !!includeRecipes
      ? await this.userModel.findOne({ name: email }).populate('recipes')
      : await this.userModel.findOne({ name: email });
    if (!user) throw new UserNotFoundException();
    return user;
  }
}
