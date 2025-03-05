import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  ResourceGradeEntity,
  NewResourceGradeDTO,
} from './resource-grade.entity.js';
import { ResourceEntity } from '../resource/resource.entity.js';

@Injectable()
export class ResourceGradeService {
  constructor(
    @InjectRepository(ResourceGradeEntity)
    private readonly resourceGradeRepository: Repository<ResourceGradeEntity>,
  ) {}

  async createMultiple(
    resource: ResourceEntity,
    grades: string[],
  ): Promise<void> {
    console.log(`Inside createMultiple in ResourceGradeService`);
    const resourceGrades = grades.map((grade) => {
      const newResourceGradeDTO = new NewResourceGradeDTO();
      newResourceGradeDTO.resourceId = resource.id;
      newResourceGradeDTO.grade = grade;
      return this.resourceGradeRepository.create(newResourceGradeDTO);
    });
    await this.resourceGradeRepository.save(resourceGrades);
  }
}
