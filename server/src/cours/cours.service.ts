import { Injectable } from '@nestjs/common';
import { Cours, CoursStatus } from './cours.entity';
import { v4 as uuid } from 'uuid';
import { UpdateCoursDto } from './dto/cours.dto';
@Injectable()
export class CoursService {
  private cours: Cours[] = [
    {
      id: '1',
      title: 'Cours 1',
      description: 'Description 1',
      status: CoursStatus.ACTIVE,
    },
  ];

  getAllCours() {
    return this.cours;
  }

  getCoursById(id: string): Cours {
    return this.cours.find((cours) => cours.id === id);
  }

  createCours(title: string, description: string) {
    const cours = {
      id: uuid(),
      title,
      description,
      status: CoursStatus.ACTIVE,
    };
    this.cours.push(cours);
    return cours;
  }

  deleteCours(id: string) {
    this.cours = this.cours.filter((cours) => cours.id !== id);
    return this.cours;
  }

  updateCours(id: string, updateFields: UpdateCoursDto): Cours {
    const cours = this.getCoursById(id);
    const newCours = Object.assign(cours, updateFields);
    this.cours = this.cours.map((cours) =>
      cours.id === id ? newCours : cours,
    );
    return newCours;
  }
}
