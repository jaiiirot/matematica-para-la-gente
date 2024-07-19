/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CoursModule } from './cours/cours.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CoursModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
