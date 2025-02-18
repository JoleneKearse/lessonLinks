import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const isTsEnviro = process.env.NODE_ENV === 'production';

const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  port: Number(process.env.DB_PORT),
  entities: isTsEnviro ? ['src/**/*.entity.ts'] : ['dist/**/*.entity.js'],  
  migrations: ['src/migrations/*.js'],
  synchronize: false, // Use migrations instead in prod
  logging: true,
  ssl:
    process.env.USE_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
});

export default AppDataSource;
