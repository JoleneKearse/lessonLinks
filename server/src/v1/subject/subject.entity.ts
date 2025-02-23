import { Entity, Column, Unique, OneToMany } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity.js';
import { SubSubjectEntity } from '../sub-subject/sub-subject.entity.js';

@Entity('subject')
@Unique(['name'])
export class SubjectEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @OneToMany(() => SubSubjectEntity, (subSubject) => subSubject.subject)
  subSubjects: SubSubjectEntity[];
}
