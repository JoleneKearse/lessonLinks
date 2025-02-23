import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSubSubject1740260198909 implements MigrationInterface {
  name = 'CreateSubSubject1740260198909';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "sub_subject" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_date" TIMESTAMP WITH TIME ZONE, "name" character varying(100) NOT NULL, "subject_id" uuid NOT NULL, CONSTRAINT "UQ_17f9dd20d30309f3eb6080d64eb" UNIQUE ("name"), CONSTRAINT "PK_b2aef15b341afe9a6d49e079c7d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "sub_subject" ADD CONSTRAINT "FK_cccefa7ae7510f4bf1daa162c34" FOREIGN KEY ("subject_id") REFERENCES "subject"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sub_subject" DROP CONSTRAINT "FK_cccefa7ae7510f4bf1daa162c34"`,
    );
    await queryRunner.query(`DROP TABLE "sub_subject"`);
  }
}
