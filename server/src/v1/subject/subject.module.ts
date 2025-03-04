import { forwardRef, Module } from '@nestjs/common';
import { SubjectEntity } from './subject.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubSubjectModule } from '../sub-subject/sub-subject.module.js';
import { SubjectController } from './subject.controller.js';
import { SubjectService } from './subject.service.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubjectEntity]),
    forwardRef(() => SubSubjectModule),
  ],
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}
