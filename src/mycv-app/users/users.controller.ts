import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(public usersService: UsersService) {}

  @Get()
  getUsers(): string {
    return 'all users';
  }
}
