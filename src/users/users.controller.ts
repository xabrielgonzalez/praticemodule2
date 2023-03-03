import { Controller, Get } from '@nestjs/common';
import { UserService } from './user/user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get('message')
  getMessage(): string {
    return this.userService.sayHello();
  }
}

