import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  // url: process.env.DATABASE_URL,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/migrations/*.ts'],
  synchronize: false, // Use migrations instead in prod
  logging: true,
  ssl:
    process.env.USE_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
});

export default AppDataSource;
