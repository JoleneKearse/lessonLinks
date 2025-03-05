import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceService } from './resource.service.js';
import { ResourceController } from './resource.controller.js';
import { ResourceEntity } from './resource.entity.js';
import { ResourceGradeEntity } from '../resource-grade/resource-grade.entity.js';
import { ResourceTagEntity } from '../resource-tag/resource-tag.entity.js';
import { ResourceGradeModule } from '../resource-grade/resource-grade.module.js';
import { ResourceTagModule } from '../resource-tag/resource-tag.module.js';
import { TagModule } from '../tag/tag.module.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([ResourceEntity]),
    ResourceGradeModule,
    ResourceTagModule,
    TagModule,
  ],
  controllers: [ResourceController],
  providers: [ResourceService],
})
export class ResourceModule {}
