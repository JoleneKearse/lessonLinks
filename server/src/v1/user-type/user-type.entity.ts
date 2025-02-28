import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "../../utils/base.entity";
import { UserEntity } from "../user/user.entity";

export enum UserTypeEnum {
  'CREATOR' = 'creator',
  'EDUCATOR' = 'educator',
}

@Entity('user_type')
export class UserTypeEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.id, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: Promise<UserEntity>;

  @Column({ type: 'varchar', enum: UserTypeEnum, nullable: false })
  type: UserTypeEnum;
}