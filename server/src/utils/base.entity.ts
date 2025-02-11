import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export class BaseDTO {
  id: string;
  createdDate: string;
  updatedDate: string;
  deletedDate: string;
}

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_date', type: 'timestamptz' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date', type: 'timestamptz' })
  updatedDate: Date;

  @DeleteDateColumn({ name: 'deleted_date', type: 'timestamptz' })
  deletedDate: Date;
}