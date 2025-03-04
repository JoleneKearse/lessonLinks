import { Module } from '@nestjs/common';
import { RequestEntity } from './request.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RequestEntity])],
  exports: [RequestEntity],
})
export class RequestModule {}