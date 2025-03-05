import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResourceTagEntity } from './resource-tag.entity.js';
import { ResourceEntity } from '../resource/resource.entity.js';

@Injectable()
export class ResourceTagService {
  constructor(
    @InjectRepository(ResourceTagEntity)
    private readonly resourceTagRepository: Repository<ResourceTagEntity>,
  ) {}
}
