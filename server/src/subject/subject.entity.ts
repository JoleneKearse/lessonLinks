import { Entity, Column } from "typeorm";
import { BaseEntity } from "../utils/base.entity.js";

@Entity("subject")
export class Subject extends BaseEntity {
  @Column({ type: "varchar", length: 100 })
  name: string;
}