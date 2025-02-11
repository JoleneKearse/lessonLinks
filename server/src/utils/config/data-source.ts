import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  port: Number(process.env.DB_PORT),
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/migrations/*.ts'],
  synchronize: false, // Use migrations instead in prod
  logging: true,
  ssl:
    process.env.USE_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
});

export default AppDataSource;
