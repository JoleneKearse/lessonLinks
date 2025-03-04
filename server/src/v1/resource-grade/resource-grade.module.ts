import { Module, forwardRef } from '@nestjs/common';
import { ResourceGradeEntity } from './resource-grade.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceModule } from '../resource/resource.module.js';
import { ResourceGradeService } from './resource-grade.service.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([ResourceGradeEntity]),
    forwardRef(() => ResourceModule),
  ],
  providers: [ResourceGradeService],
  exports: [ResourceGradeService],
})
export class ResourceGradeModule {}
