import { Entity, Column, Unique, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity.js';
import { SubjectEntity } from '../subject/subject.entity.js';

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
}
