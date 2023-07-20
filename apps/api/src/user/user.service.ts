import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserModel } from './schema/User.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: UserModel) {}

  async getUserBySub(sub: string) {
    const user = await this.userModel.findOne({ sub });
    console.log(user);
    return user;
  }
}
