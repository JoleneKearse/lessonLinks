import { Controller, Get } from '@nestjs/common';
import { ResourceService } from './resource.service.js';
import { ResourceEntity } from './resource.entity.js';

@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Get()
  async findAll(): Promise<ResourceEntity[]> {
    return this.resourceService.findAll();
  }
}