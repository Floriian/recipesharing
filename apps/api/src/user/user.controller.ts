import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { GetUser } from 'src/decorators';
import { Auth0Payload } from 'src/types';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtGuard)
  getUser(
    @GetUser() user: Auth0Payload,
    @Query('includeRecipes') includeRecipes: string,
  ) {
    return this.userService.getUserByEmail(user.email, includeRecipes);
  }
}
