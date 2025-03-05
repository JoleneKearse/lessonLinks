import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity, BaseDTO } from '../../utils/base.entity.js';
import { SubjectEntity } from '../subject/subject.entity.js';
import { SubSubjectEntity } from '../sub-subject/sub-subject.entity.js';
import { UserEntity } from '../user/user.entity.js';
import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { IntersectionType } from '@nestjs/mapped-types';

export enum GradeEnum {
  FIRST = '1st',
  SECOND = '2nd',
  THIRD = '3rd',
  FOURTH = '4th',
  FIFTH = '5th',
  SIXTH = '6th',
  SEVENTH = '7th',
  EIGHTH = '8th',
  NINTH = '9th',
  TENTH = '10th',
  ELEVENTH = '11th',
  TWELFTH = '12th',
  UNDERGRADUATE = 'undergraduate',
}

export enum FormatEnum {
  GOOGLE_DOC = 'google_doc',
  PDF = 'pdf',
  POWERPOINT = 'powerpoint',
  EXCEL = 'excel',
  WORD = 'word',
}

export class NewRequestDTO {
  @IsNotEmpty()
  @IsUUID()
  requestedByUserId: string;

  @IsNotEmpty()
  @IsEnum(GradeEnum)
  grade: GradeEnum;

  @IsNotEmpty()
  @IsUUID()
  subjectId: string;

  @IsNotEmpty()
  @IsUUID()
  subSubjectId: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(FormatEnum)
  format: FormatEnum;
}

export class RequestDTO extends IntersectionType(BaseDTO, NewRequestDTO) {}

@Entity('request')
export class RequestEntity extends BaseEntity {
  @Column({ type: 'enum', enum: GradeEnum, nullable: false })
  grade: string;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'enum', enum: FormatEnum, nullable: false })
  format: FormatEnum;

  @ManyToOne(() => SubjectEntity, (subject) => subject.id, { onDelete: 'RESTRICT', nullable: false })
  @JoinColumn({ name: 'subject_id' })
  subject: Promise<SubjectEntity>;

  @ManyToOne(() => SubSubjectEntity, (subSubject) => subSubject.id, { onDelete: 'RESTRICT', nullable: false })
  @JoinColumn({ name: 'sub_subject_id' })
  subSubject: Promise<SubSubjectEntity>;

  @ManyToOne(() => UserEntity, (user) => user.id, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'requested_by_user_id' })
  user: Promise<UserEntity>;
}