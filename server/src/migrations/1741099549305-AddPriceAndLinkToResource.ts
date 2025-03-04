import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPriceAndLinkToResource1741099549305 implements MigrationInterface {
    name = 'AddPriceAndLinkToResource1741099549305'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resource" ADD "price" character varying(10)`);
        await queryRunner.query(`ALTER TABLE "resource" ADD "link" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resource" DROP COLUMN "link"`);
        await queryRunner.query(`ALTER TABLE "resource" DROP COLUMN "price"`);
    }

}
