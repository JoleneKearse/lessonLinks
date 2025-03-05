import { Controller, Get, Post, Body } from '@nestjs/common';
import { ResourceService } from './resource.service.js';
import { NewResourceDTO, ResourceEntity } from './resource.entity.js';

@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Get()
  async findAll(): Promise<ResourceEntity[]> {
    return this.resourceService.findAll();
  }

  @Post()
  async create(
    @Body('newResourceDTO') newResourceDTO: NewResourceDTO,
    @Body('grades') grades: string[],
    @Body('tags') tags: string[],
  ): Promise<ResourceEntity> {
    return await this.resourceService.create(newResourceDTO, grades, tags);
  }
}
