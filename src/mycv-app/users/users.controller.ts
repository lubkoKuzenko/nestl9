import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  NotFoundException,
} from '@nestjs/common';
import { Serialize } from '../common';
import { UserDto, UpdateUserDto } from './dto';
import { UsersService } from './users.service';

@Controller('users')
@Serialize(UserDto)
export class UsersController {
  constructor(public usersService: UsersService) {}

  @Get('/')
  findAllUsers() {
    return this.usersService.findAll();
  }

  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.usersService.findOne(Number(id));

    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return user;
  }

  @Patch('/:id')
  UpdateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(Number(id), body);
  }

  @Delete('/:id')
  DeleteUser(@Param('id') id: string) {
    return this.usersService.delete(Number(id));
  }
}
