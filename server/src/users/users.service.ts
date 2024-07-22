import {  Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { USERS_REPOSITORY} from './repository/users.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@Inject(USERS_REPOSITORY) private readonly UsersRepository) {}

  async create(createUserDto: CreateUserDto){
    return await this.UsersRepository.createUser(createUserDto);
  }

  async findAll() {
    // return this.userModel.find().exec();
  }

  async findOne(id: string) {
    // return this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto){
    // const existingUser = await this.userModel.findByIdAndUpdate(
    //   { _id: id },
    //   { $set: updateUserDto },
    //   { new: true },
    // );
    // if (!existingUser) {
    //   throw new NotFoundException('No se encontró el usuario');
    // }
    // return existingUser;
  }

  async remove(id: string) {
    // const result = await this.userModel.deleteOne({ _id: id }).exec();
    // if (result.deletedCount === 0) {
    //   throw new NotFoundException('No se encontró el usuario');
    // }
    // return { deleted: true };
  }
}
