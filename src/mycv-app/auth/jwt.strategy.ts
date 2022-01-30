import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ACCESS_TOKEN_SECRET } from '../environments';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: ACCESS_TOKEN_SECRET!,
    });
  }

  //   async validate(payload: any) {
  //     const user = await this.authService.validateUser(payload);
  //     if (!user) {
  //         throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
  //     }
  //     return { userId: payload.sub, username: payload.username };
  //   }
}
