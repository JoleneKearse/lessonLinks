import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../utils/base.entity.js";

@Entity('resource')
export class ResourceEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  topic: string;

  @Column({ type: 'varchar', nullable: false})
  description: string;
}