import { Entity, Column, Unique, OneToMany } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity.js';
import { SubSubjectEntity } from '../sub-subject/sub-subject.entity.js';
import { ResourceEntity } from '../resource/resource.entity.js';

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
