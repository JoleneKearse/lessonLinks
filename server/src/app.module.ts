import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectModule } from './subject/subject.module';

@Module({
  imports: [SubjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
