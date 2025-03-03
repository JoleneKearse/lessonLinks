import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateResourceAndDependents1741033994607 implements MigrationInterface {
    name = 'CreateResourceAndDependents1741033994607'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "resource" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_date" TIMESTAMP WITH TIME ZONE, "name" character varying(100) NOT NULL, "topic" character varying(100) NOT NULL, "description" character varying NOT NULL, "subject_id" uuid NOT NULL, "sub_subject_id" uuid NOT NULL, CONSTRAINT "PK_e2894a5867e06ae2e8889f1173f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "resource_tag" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_date" TIMESTAMP WITH TIME ZONE, "resource_id" uuid NOT NULL, "tag_id" uuid NOT NULL, CONSTRAINT "PK_647f58a7d1fc3f54fc6f636a8a3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "resource_grade" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_date" TIMESTAMP WITH TIME ZONE, "grade" character varying(50) NOT NULL, "resource_id" uuid NOT NULL, CONSTRAINT "PK_a668219524298b2dec7265f1a87" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "resource" ADD CONSTRAINT "FK_c0338213ff279823da721fc39cf" FOREIGN KEY ("subject_id") REFERENCES "subject"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "resource" ADD CONSTRAINT "FK_5c4b8d5f83187014bc03d02ec0e" FOREIGN KEY ("sub_subject_id") REFERENCES "sub_subject"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "resource_tag" ADD CONSTRAINT "FK_b74720cd0e30bb7d86521d78603" FOREIGN KEY ("resource_id") REFERENCES "resource"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "resource_tag" ADD CONSTRAINT "FK_8c7f60920590949eb8ed6c91252" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "resource_grade" ADD CONSTRAINT "FK_14b3a864b4b7124654f96a564b7" FOREIGN KEY ("resource_id") REFERENCES "resource"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resource_grade" DROP CONSTRAINT "FK_14b3a864b4b7124654f96a564b7"`);
        await queryRunner.query(`ALTER TABLE "resource_tag" DROP CONSTRAINT "FK_8c7f60920590949eb8ed6c91252"`);
        await queryRunner.query(`ALTER TABLE "resource_tag" DROP CONSTRAINT "FK_b74720cd0e30bb7d86521d78603"`);
        await queryRunner.query(`ALTER TABLE "resource" DROP CONSTRAINT "FK_5c4b8d5f83187014bc03d02ec0e"`);
        await queryRunner.query(`ALTER TABLE "resource" DROP CONSTRAINT "FK_c0338213ff279823da721fc39cf"`);
        await queryRunner.query(`DROP TABLE "resource_grade"`);
        await queryRunner.query(`DROP TABLE "resource_tag"`);
        await queryRunner.query(`DROP TABLE "resource"`);
    }

}
