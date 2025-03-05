import { Module, forwardRef } from '@nestjs/common';
import { ResourceTagEntity } from './resource-tag.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceModule } from '../resource/resource.module.js';
import { ResourceTagService } from './resource-tag.service.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([ResourceTagEntity]),
    forwardRef(() => ResourceModule),
  ],
  providers: [ResourceTagService],
  exports: [ResourceTagService],
})
export class ResourceTagModule {}
