import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  readonly id: number;

  @Expose()
  readonly name: string;

  @Expose()
  readonly email: string;
}
