import { Entity, Column, Unique } from 'typeorm';
import { BaseEntity } from '../utils/base.entity.js';

@Entity('subject')
@Unique(['name'])
export class Subject extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;
}
