import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  create(body: CreateUserDto) {
    const user = this.usersRepository.create(body);

    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    if (!id) {
      throw new NotFoundException('User not found.');
    }
    return await this.usersRepository.findOne(id);
  }

  async findOneByEmail(email: string) {
    const foundUser = await this.usersRepository.find({ email });

    if (!foundUser) {
      throw new NotFoundException('User not found.');
    }

    return foundUser;
  }

  async update(id: number, body: Partial<UserEntity>) {
    if (!id) {
      throw new NotFoundException('No Id Provided.');
    }

    const user = await this.usersRepository.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    return this.usersRepository.save({ ...user, ...body });
  }

  async delete(id: number) {
    const user = await this.usersRepository.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    return this.usersRepository.remove(user);
  }
}
