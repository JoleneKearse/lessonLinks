import { forwardRef, Module } from '@nestjs/common';
import { SubjectEntity } from './subject.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubSubjectModule } from '../sub-subject/sub-subject.module.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubjectEntity]),
    forwardRef(() => SubSubjectModule),
  ],
})
export class SubjectModule {}
