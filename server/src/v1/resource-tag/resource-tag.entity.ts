import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity, BaseDTO } from '../../utils/base.entity.js';
import { ResourceEntity } from '../resource/resource.entity.js';
import { TagEntity } from '../tag/tag.entity.js';
import { IntersectionType } from '@nestjs/mapped-types';

@Entity('resource_tag')
export class ResourceTagEntity extends BaseEntity {
  @ManyToOne(() => ResourceEntity, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'resource_id' })
  resource: Promise<ResourceEntity>;

  @Column({ name: 'resource_id', type: 'uuid' })
  resourceId: string;

  @ManyToOne(() => TagEntity, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'tag_id' })
  tag: Promise<TagEntity>;

  @Column({ name: 'tag_id', type: 'uuid' })
  tagId: string;
}

export class NewResourceTagDTO {
  resourceId: string;
  tagId: string;
}

export class ResourceDTO extends IntersectionType(BaseDTO, NewResourceTagDTO) {}
