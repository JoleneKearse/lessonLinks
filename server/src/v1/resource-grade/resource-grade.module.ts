import { Module, forwardRef } from '@nestjs/common';
import { ResourceGradeEntity } from './resource-grade.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceModule } from '../resource/resource.module.js';

@Module({
  imports: [TypeOrmModule.forFeature([ResourceGradeEntity]),
    forwardRef(() => ResourceModule)],
  exports: [ResourceGradeEntity],
})
export class ResourceGradeModule {}