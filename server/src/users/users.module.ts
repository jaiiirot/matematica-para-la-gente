import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Users, UsersSchema } from './schemas/users.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { UsersMongoRepository } from './repository/user.mongo.repository';
import { USERS_REPOSITORY } from './repository/users.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: USERS_REPOSITORY,
      useClass: UsersMongoRepository,
    },
  ],
})
export class UsersModule {}
