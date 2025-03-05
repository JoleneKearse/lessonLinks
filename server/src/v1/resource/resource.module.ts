import { Module } from '@nestjs/common';
import { ResourceEntity } from './resource.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceController } from './resource.controller.js';
import { ResourceService } from './resource.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([ResourceEntity])],
  controllers: [ResourceController],
  providers: [ResourceService],
  exports: [TypeOrmModule],
})
export class ResourceModule {}