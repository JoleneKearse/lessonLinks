import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateCreateUser1740926395011 implements MigrationInterface {
    name = 'UpdateCreateUser1740926395011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_date" TIMESTAMP WITH TIME ZONE, "userId" uuid NOT NULL, "email" character varying, "provider" character varying NOT NULL, "provider_id" character varying NOT NULL, CONSTRAINT "UQ_d72ea127f30e21753c9e229891e" UNIQUE ("userId"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_5e3a2b86fd9a9c22c266ae04731" UNIQUE ("provider_id"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_date" TIMESTAMP WITH TIME ZONE, "type" character varying NOT NULL, "user_id" uuid NOT NULL, CONSTRAINT "PK_1f9c6d05869e094dee8fa7d392a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_type" ADD CONSTRAINT "FK_6cabc8febcf92ae8af99bfb07d8" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_type" DROP CONSTRAINT "FK_6cabc8febcf92ae8af99bfb07d8"`);
        await queryRunner.query(`DROP TABLE "user_type"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
