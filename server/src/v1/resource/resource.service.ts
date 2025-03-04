import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResourceEntity, NewResourceDTO } from './resource.entity.js';
import { ResourceGradeService } from '../resource-grade/resource-grade.service.js';
import { ResourceTagService } from '../resource-tag/resource-tag.service.js';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(ResourceEntity)
    private readonly resourceRepository: Repository<ResourceEntity>,
    private readonly resourceGradeService: ResourceGradeService,
    private readonly resourceTagService: ResourceTagService,
  ) {}

  async create(
    newResourceDTO: NewResourceDTO,
    grades: string[],
    tags: string[],
  ): Promise<ResourceEntity> {
    const resource = this.resourceRepository.create(newResourceDTO);
    const savedResource = await this.resourceRepository.save(resource);

    if (grades && grades.length > 0) {
      await this.resourceGradeService.createResourceGrades(resource, grades);
    }

    if (tags && tags.length > 0) {
      // TODO: Implement this
    }

    return savedResource;
  }
}
