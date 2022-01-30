import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { comparePassword, hashPassword } from '../utils';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signup(email: string, password: string) {
    const existedUser = await this.usersService.findOneByEmail(email);

    if (existedUser.length) {
      throw new ForbiddenException('Email already existed.');
    }

    const newUser = await this.usersService.create({
      email,
      password: await hashPassword(password),
    });

    return newUser;
  }

  async signin(email: string, password: string) {
    const [existedUser] = await this.usersService.findOneByEmail(email);

    if (!existedUser) {
      throw new NotFoundException('User not found.');
    }

    if (
      existedUser &&
      (await comparePassword(password, existedUser.password))
    ) {
      return existedUser;
    }

    throw new NotFoundException('User not found.');
  }
}
