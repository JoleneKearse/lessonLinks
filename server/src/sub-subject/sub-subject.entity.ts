import { Entity, Unique } from 'typeorm';
import { BaseEntity } from '../utils/base.entity.js';

@Entity('sub_subject')
@Unique(['name'])
export class SubSubjectEntity extends BaseEntity {}
