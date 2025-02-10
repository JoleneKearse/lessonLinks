import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './utils/config/data-source';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  // Initialize logger
  const mainLogger = new Logger('Main');

  // Ensure database connection initializes before app starts
  mainLogger.log('Starting attempt to connect to database...');
  await AppDataSource.initialize()
    .then(() => mainLogger.log('Database connection established'))
    .catch((err) => {
      mainLogger.error('Error during Data Source initialization', err);
      process.exit(1); // Prevent app from starting if DB fails
    });

  // Create NestJS app
  mainLogger.log('Calling NestFactory.create(AppModule)');
  const app = await NestFactory.create(AppModule);

  // Start the app
  mainLogger.log('Starting the app...)');
  // Start the app
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
bootstrap();
