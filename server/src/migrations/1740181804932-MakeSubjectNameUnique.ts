import { MigrationInterface, QueryRunner } from 'typeorm';

export class MakeSubjectNameUnique1740181804932 implements MigrationInterface {
  name = 'MakeSubjectNameUnique1740181804932';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "subject" ADD CONSTRAINT "UQ_d011c391e37d9a5e63e8b04c977" UNIQUE ("name")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "subject" DROP CONSTRAINT "UQ_d011c391e37d9a5e63e8b04c977"`,
    );
  }
}
