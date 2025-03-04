import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity.js';

@Entity('tag')
export class TagEntity extends BaseEntity {
  @Column({ type: 'varchar', unique: true, length: 50, nullable: false })
  name: string;
}
