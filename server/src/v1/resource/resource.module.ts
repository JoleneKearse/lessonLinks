import { Module } from '@nestjs/common';
import { ResourceEntity } from './resource.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ResourceEntity])],
  exports: [ResourceEntity],
})
export class ResourceModule {}