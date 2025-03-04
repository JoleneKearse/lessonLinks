import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity.js';
import { UserTypeEntity } from '../user-type/user-type.entity.js';
import { IsInt, Max, Min } from 'class-validator';

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar', unique: true, nullable: true })
  username: string;

  @IsInt()
  @Min(1000)
  @Max(9999)
  @Column({ type: 'smallint', nullable: false, unique: true })
  pin: number;

  @OneToMany(() => UserTypeEntity, (userType) => userType.user)
  userTypes: Promise<UserTypeEntity[]>;
}
