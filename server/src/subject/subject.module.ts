import { Module } from '@nestjs/common';
import { SubjectController } from './subject.controller.js';
import { SubjectService } from './subject.service.js';

@Module({
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}
