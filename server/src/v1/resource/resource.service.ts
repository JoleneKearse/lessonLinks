import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResourceEntity, NewResourceDTO } from './resource.entity.js';
import { ResourceGradeService } from '../resource-grade/resource-grade.service.js';
import { TagService } from '../tag/tag.service.js';
import { ResourceTagService } from '../resource-tag/resource-tag.service.js';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(ResourceEntity)
    private readonly resourceRepository: Repository<ResourceEntity>,
    private readonly resourceGradeService: ResourceGradeService,
    private readonly tagService: TagService,
    private readonly resourceTagService: ResourceTagService,
  ) {}

  async findAll(): Promise<ResourceEntity[]> {
    return this.resourceRepository.find();
  }

  async createResourceAndDependentGradesAndTags(
    newResourceDTO: NewResourceDTO,
    grades: string[],
    tagNames: string[],
  ): Promise<ResourceEntity> {
    const resource = this.resourceRepository.create(newResourceDTO);
    const savedResource = await this.resourceRepository.save(resource);

    if (grades && grades.length > 0) {
      await this.resourceGradeService.createMultiple(resource, grades);
    }

    if (tagNames && tagNames.length > 0) {
      const normalizedTagNames = tagNames.map((tagName) =>
        tagName.toLowerCase(),
      );
      const tags =
        await this.tagService.findOrCreateByNames(normalizedTagNames);
      const tagIds = tags.map((tag) => tag.id);
      await this.resourceTagService.createMultiple(resource.id, tagIds);
    }

    return savedResource;
  }
}
