import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Logger } from '@nestjs/common';

import { SubjectModule } from './subject/subject.module';

const appModuleLogger = new Logger('AppModule');
appModuleLogger.log('Starting AppModule...');

@Module({
  imports: [SubjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
