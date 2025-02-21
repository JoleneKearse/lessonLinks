import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  port: Number(process.env.DB_PORT),
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/**/*.js'],
  synchronize: false, // Use migrations instead in prod
  logging: true,
  ssl:
    process.env.USE_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
});

export default AppDataSource;
