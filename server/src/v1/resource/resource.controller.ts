import { Controller, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResourceService } from './resource.service.js';
import { NewResourceDTO, ResourceEntity } from './resource.entity.js';

@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Post()
  async create(
    @Body('newResourceDTO') newResourceDTO: NewResourceDTO,
    @Body('grades') grades: string[],
    @Body('tags') tags: string[],
  ): Promise<ResourceEntity> {
    return await this.resourceService.create(newResourceDTO, grades, tags);
  }
}
