// import {
//   PrimaryGeneratedColumn,
//   CreateDateColumn,
//   UpdateDateColumn,
//   DeleteDateColumn,
// } from 'typeorm';

// export class BaseDTO {
//   id: string;
//   createdDate: string;
//   updatedDate: string;
//   deletedDate: string;
// }

// export class DefaultEntity {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @CreateDateColumn({ name: 'created_date', type: 'timestamptz' })
//   createdDate: Date;

//   @UpdateDateColumn({ name: 'updated_date', type: 'timestamptz' })
//   updatedDate: Date;

//   @DeleteDateColumn({ name: 'deleted_date', type: 'timestamptz' })
//   deletedDate: Date;
// }

// "typeorm": "tsx -r dotenv/config ./node_modules/typeorm/cli.js --dataSource ./src/utils/config/data-source.ts",
// "typeorm:generate-migration": "npm run typeorm migration:generate -n src/migrations/NameHere",
// "typeorm:run-migrations": "npm run typeorm migration:run",
// "typeorm:revert-migration": "npm run typeorm migration:revert"