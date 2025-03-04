import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity.js';
import { ResourceEntity } from '../resource/resource.entity.js';

@Entity('resource_grade')
export class ResourceGradeEntity extends BaseEntity {
  @ManyToOne(() => ResourceEntity, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'resource_id' })
  resource: Promise<ResourceEntity>;

  @Column({ type: 'varchar', length: 50, nullable: false })
  grade: string;
}

export class NewResourceGradeDTO {
  resourceId: string;
  grade: string;
}
