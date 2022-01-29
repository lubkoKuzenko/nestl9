import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  NotFoundException,
  UseInterceptors,
} from '@nestjs/common';
import { SerializeInterceptor } from '../common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(public usersService: UsersService) {}

  @Post('signup')
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @UseInterceptors(SerializeInterceptor)
  @Get('/users/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.usersService.findOne(Number(id));

    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return user;
  }

  @Get('/users')
  findAllUsers() {
    return this.usersService.findAll();
  }

  @Patch('users/:id')
  UpdateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(Number(id), body);
  }

  @Delete('users/:id')
  DeleteUser(@Param('id') id: string) {
    return this.usersService.delete(Number(id));
  }
}
