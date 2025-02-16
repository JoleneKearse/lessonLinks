import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './subject.entity.js';
import { SubjectController } from './subject.controller.js';
import { SubjectService } from './subject.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Subject])],
  controllers: [SubjectController],
  providers: [SubjectService]
})
export class SubjectModule {}
