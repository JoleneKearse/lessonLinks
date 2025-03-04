import { Entity, Column, Unique, OneToMany } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';
import { IntersectionType } from '@nestjs/mapped-types';

import { BaseDTO, BaseEntity } from '../../utils/base.entity.js';
import { SubSubjectEntity } from '../sub-subject/sub-subject.entity.js';
import { ResourceEntity } from '../resource/resource.entity.js';

export class NewSubjectDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class SubjectDTO extends IntersectionType(BaseDTO, NewSubjectDTO) {}

@Entity('subject')
@Unique(['name'])
export class SubjectEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @OneToMany(() => SubSubjectEntity, (subSubject) => subSubject.subject)
  subSubjects: SubSubjectEntity[];

  @OneToMany(() => ResourceEntity, (resource) => resource.subject)
  resources: ResourceEntity[];
}
