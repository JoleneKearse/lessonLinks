import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "../../utils/base.entity";
import { UserTypeEntity } from "../user-type/user-type.entity";

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column({ type: 'uuid', unique: true })
  userId: string;

  @Column({ type: 'varchar', unique: true, nullable: true})
  email: string | null; // not all providers provide email

  @Column({ type: 'varchar', nullable: false })
  provider: string;

  @Column({ type: 'varchar', unique: true })
  provider_id: string;

  @OneToMany(() => UserTypeEntity, (userType) => userType.user)
  userTypes: Promise<UserTypeEntity[]>;
}