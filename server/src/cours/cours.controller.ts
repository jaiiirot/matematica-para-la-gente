import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursService } from './cours.service';
import { CreateCoursDto, UpdateCoursDto } from './dto/cours.dto';

@Controller('cours')
export class CoursController {
  constructor(private coursService: CoursService) {}

  @Get()
  getAllCours() {
    return this.coursService.getAllCours();
  }

  @Post()
  createCours(@Body() newCours: CreateCoursDto) {
    return this.coursService.createCours(newCours.title, newCours.description);
  }

  @Delete(':id')
  deleteCours(@Param('id') id: string) {
    return this.coursService.deleteCours(id);
  }

  @Patch(':id')
  updateCours(@Param('id') id: string, @Body() updateFields: UpdateCoursDto) {
    return this.coursService.updateCours(id, updateFields);
  }
}
