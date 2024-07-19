import { Module } from '@nestjs/common';
import { CoursController } from './cours.controller';
import { CoursService } from './cours.service';

@Module({
  controllers: [CoursController],
  providers: [CoursService],
})
export class CoursModule {}
