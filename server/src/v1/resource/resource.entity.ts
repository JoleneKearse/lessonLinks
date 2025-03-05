import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
} from 'class-validator';
import { IntersectionType } from '@nestjs/mapped-types';
import { BaseEntity, BaseDTO } from '../../utils/base.entity.js';
import { SubjectEntity } from '../subject/subject.entity.js';
import { SubSubjectEntity } from '../sub-subject/sub-subject.entity.js';
import { ResourceTagEntity } from '../resource-tag/resource-tag.entity.js';

export class NewResourceDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  topic: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  subjectId: string;

  @IsNotEmpty()
  @IsString()
  subSubjectId: string;
}

export class ResourceDTO extends IntersectionType(BaseDTO, NewResourceDTO) {}

@Entity('resource')
export class ResourceEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  topic: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  price: string;  //  Could be free or include country code and currency symbol

  @Column({ type: 'varchar', nullable: false })
  link: string;

  @ManyToOne(() => SubjectEntity, (subject) => subject.resources, {
    onDelete: 'RESTRICT', 
    nullable: false, 
  })
  @JoinColumn({ name: 'subject_id' })
  subject: Promise<SubjectEntity>;

  @Column({ name: 'subject_id', nullable: false })
  subjectId: string;

  @ManyToOne(() => SubSubjectEntity, (subSubject) => subSubject.resources, {
    onDelete: 'RESTRICT',
    nullable: false,
  })
  @JoinColumn({ name: 'sub_subject_id' })
  subSubject: Promise<SubSubjectEntity>;

  @Column({ name: 'sub_subject_id', nullable: false })
  subSubjectId: string;

  @OneToMany(() => ResourceTagEntity, (resourceTag) => resourceTag.resource)
  resourceTags: ResourceTagEntity[];
}
