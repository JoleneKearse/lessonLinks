import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity.js';
import { ResourceEntity } from '../resource/resource.entity.js';
import { TagEntity } from '../tag/tag.entity.js';

@Entity('resource_tag')
export class ResourceTagEntity extends BaseEntity {
  @ManyToOne(() => ResourceEntity, { onDelete: 'CASCADE',
    nullable: false })
  @JoinColumn({ name: 'resource_id' })
  resource: Promise<ResourceEntity>;

  @ManyToOne(() => TagEntity, { onDelete: 'CASCADE',
    nullable: false })
  @JoinColumn({ name: 'tag_id' })
  tag: Promise<TagEntity>;
}