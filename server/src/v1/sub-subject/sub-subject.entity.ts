import { Entity, Column, Unique, ManyToOne, JoinColumn } from 'typeorm';
import { BaseDTO, BaseEntity } from '../../utils/base.entity.js';
import { SubjectEntity } from '../subject/subject.entity.js';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { IntersectionType } from '@nestjs/mapped-types';

export class NewSubSubjectDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsUUID()
  subjectId: string;
}

export class SubSubjectDTO extends IntersectionType(
  BaseDTO,
  NewSubSubjectDTO,
) {}

@Entity('sub_subject')
@Unique(['name'])
export class SubSubjectEntity extends BaseEntity {
  @Column({ type: 'varchar', nullable: false, length: 100 })
  name: string;

  @ManyToOne(() => SubjectEntity, (subject) => subject.subSubjects, {
    onDelete: 'RESTRICT',
    nullable: false,
  })
  @JoinColumn({ name: 'subject_id' })
  subject: Promise<SubjectEntity>;

  @Column({ name: 'subject_id', type: 'uuid' })
  subjectId: string;
}
