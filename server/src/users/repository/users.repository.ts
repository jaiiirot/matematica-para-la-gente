import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

export const USERS_REPOSITORY = 'UsersRepository';

export interface UsersRepository {
  createUser(CreateUserDto: CreateUserDto): Promise<User>;
}
