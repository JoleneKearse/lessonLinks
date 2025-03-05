import { Module } from '@nestjs/common';
import { RequestEntity } from './request.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestService } from './request.service.js';
import { RequestController } from './request.controller.js';

@Module({
  imports: [TypeOrmModule.forFeature([RequestEntity])],
  controllers: [RequestController],
  providers: [RequestService],
})
export class RequestModule {}