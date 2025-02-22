import { forwardRef, Module } from '@nestjs/common';
import { SubSubjectEntity } from './sub-subject.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectModule } from '../subject/subject.module.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubSubjectEntity]),
    forwardRef(() => SubjectModule),
  ],
})
export class SubSubjectModule {}
