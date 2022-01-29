import {
  IsEmail,
  MinLength,
  MaxLength,
  IsString,
  IsOptional,
} from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  readonly email: string;

  @MinLength(3)
  @MaxLength(6)
  @IsOptional()
  readonly password: string;

  @IsString()
  @IsOptional()
  readonly name: string;
}
