import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import AppDataSource from './utils/config/data-source.js';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  // Initialize logger
  const mainLogger = new Logger('Main');

  // Create NestJS app
  mainLogger.log('Calling NestFactory.create(AppModule)');
  const app = await NestFactory.create(AppModule);

  // Set CORS settings prior to app listen
  app.enableCors({
    origin: 'https://lesson-links.netlify.app/',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  });

  // Start the app
  mainLogger.log('Starting the app...)');
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
bootstrap();
