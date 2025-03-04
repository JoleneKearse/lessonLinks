import { Module } from '@nestjs/common';
import { TagEntity } from './tag.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
})
export class TagModule {}
