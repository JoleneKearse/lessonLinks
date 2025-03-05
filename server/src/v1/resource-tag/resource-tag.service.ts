import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResourceTagEntity, NewResourceTagDTO } from './resource-tag.entity.js';

@Injectable()
export class ResourceTagService {
  constructor(
    @InjectRepository(ResourceTagEntity)
    private readonly resourceTagRepository: Repository<ResourceTagEntity>,
  ) {}

  createMultiple(
    resourceId: string,
    tagIds: string[],
  ): Promise<ResourceTagEntity[]> {
    console.log(`Inside createMultiple in ResourceTagService`);
    const resourceTags = tagIds.map((tagId) =>
      this.resourceTagRepository.create({ resourceId, tagId }),
    );
    return this.resourceTagRepository.save(resourceTags);
  }
}
