import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRequest1741115843004 implements MigrationInterface {
    name = 'CreateRequest1741115843004'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."request_grade_enum" AS ENUM('1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', 'undergraduate')`);
        await queryRunner.query(`CREATE TYPE "public"."request_format_enum" AS ENUM('google_doc', 'pdf', 'powerpoint', 'excel', 'word')`);
        await queryRunner.query(`CREATE TABLE "request" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_date" TIMESTAMP WITH TIME ZONE, "grade" "public"."request_grade_enum" NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "format" "public"."request_format_enum" NOT NULL, "subject_id" uuid NOT NULL, "sub_subject_id" uuid NOT NULL, "requested_by_user_id" uuid NOT NULL, CONSTRAINT "PK_167d324701e6867f189aed52e18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "resource" ADD "price" character varying(10)`);
        await queryRunner.query(`ALTER TABLE "resource" ADD "link" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "request" ADD CONSTRAINT "FK_17ce85f0d1b5d6d7138a85714eb" FOREIGN KEY ("subject_id") REFERENCES "subject"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "request" ADD CONSTRAINT "FK_2b0867110747a604470bc881038" FOREIGN KEY ("sub_subject_id") REFERENCES "sub_subject"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "request" ADD CONSTRAINT "FK_02bce696ec4c28d2feef4df512b" FOREIGN KEY ("requested_by_user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "request" DROP CONSTRAINT "FK_02bce696ec4c28d2feef4df512b"`);
        await queryRunner.query(`ALTER TABLE "request" DROP CONSTRAINT "FK_2b0867110747a604470bc881038"`);
        await queryRunner.query(`ALTER TABLE "request" DROP CONSTRAINT "FK_17ce85f0d1b5d6d7138a85714eb"`);
        await queryRunner.query(`ALTER TABLE "resource" DROP COLUMN "link"`);
        await queryRunner.query(`ALTER TABLE "resource" DROP COLUMN "price"`);
        await queryRunner.query(`DROP TABLE "request"`);
        await queryRunner.query(`DROP TYPE "public"."request_format_enum"`);
        await queryRunner.query(`DROP TYPE "public"."request_grade_enum"`);
    }

}
