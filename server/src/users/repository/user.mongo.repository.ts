import { Injectable, NotFoundException} from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { UsersModel } from '../schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersMongoRepository implements UsersRepository {
  constructor(@InjectModel(User.name) private userModel: UsersModel) {}

  async createUser(CreateUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(CreateUserDto);
    if (!createUser) {
      throw new NotFoundException('No se pudo crear el usuario');
    }
    return createUser.save();
  }
}
