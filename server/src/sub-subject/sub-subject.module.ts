import { Module } from '@nestjs/common';
import { SubSubjectController } from './sub-subject.controller.js';
import { SubSubjectService } from './sub-subject.service.js';

@Module({
  controllers: [SubSubjectController],
  providers: [SubSubjectService],
})
export class SubSubjectModule {}
