import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  MaxLength,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(6)
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
