import { forwardRef, Module } from '@nestjs/common';
import { SubSubjectEntity } from './sub-subject.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectModule } from '../subject/subject.module.js';
import { SubSubjectController } from './sub-subject.controller.js';
import { SubSubjectService } from './sub-subject.service.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubSubjectEntity]),
    forwardRef(() => SubjectModule),
  ],
    controllers: [SubSubjectController],
    providers: [SubSubjectService],
})
export class SubSubjectModule {}
