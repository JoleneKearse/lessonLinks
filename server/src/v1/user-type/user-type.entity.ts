import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "../../utils/base.entity.js";
import { UserEntity } from "../user/user.entity.js";

export enum UserTypeEnum {
  'CREATOR' = 'creator',
  'EDUCATOR' = 'educator',
}

@Entity('user_type')
export class UserTypeEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: Promise<UserEntity>;

  @Column({ type: 'varchar', nullable: false })
  type: string;
}