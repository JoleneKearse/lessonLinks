import { Module } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import AppDataSource from './utils/config/data-source.js';

import { V1Module } from './v1/v1.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

const appModuleLogger = new Logger('AppModule');
appModuleLogger.log('Starting AppModule...');

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        await AppDataSource.initialize(); // Ensure the data source is initialized
        return AppDataSource.options; // Use the options from your DataSource
      },
    }),
    V1Module,
  ],
})
export class AppModule {}
