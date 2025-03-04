import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { BaseEntity } from "../../utils/base.entity.js";
import { SubjectEntity } from "../subject/subject.entity.js";
import { SubSubjectEntity } from "../sub-subject/sub-subject.entity.js";
import { ResourceTagEntity } from "../resource-tag/resource-tag.entity.js";

@Entity('resource')
export class ResourceEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  topic: string;

  @Column({ type: 'varchar', nullable: false})
  description: string;

  @ManyToOne(() => SubjectEntity, (subject) => subject.resources, { onDelete: 'RESTRICT', nullable: false })
  @JoinColumn({ name: 'subject_id' })
  subject: Promise<SubjectEntity>;

  @ManyToOne(() => SubSubjectEntity, (subSubject) => subSubject.resources, { onDelete: 'RESTRICT', nullable: false })
  @JoinColumn({ name: 'sub_subject_id' })
  subSubject: Promise<SubSubjectEntity>;

  @OneToMany(() => ResourceTagEntity, (resourceTag) => resourceTag.resource)
  resourceTags: ResourceTagEntity[];
}