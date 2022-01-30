import { Body, Controller, Post } from '@nestjs/common';
import { Serialize } from '../common';
import { UserDto, CreateUserDto } from '../users/dto';
import { AuthService } from './auth.service';

@Controller('auth')
@Serialize(UserDto)
export class AuthController {
  constructor(public authService: AuthService) {}

  @Post('signup')
  register(@Body() body: CreateUserDto) {
    return this.authService.signup(body.email, body.password);
  }

  @Post('signin')
  login(@Body() body: CreateUserDto) {
    return this.authService.signin(body.email, body.password);
  }
}
