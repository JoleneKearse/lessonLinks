import { Module, Logger } from '@nestjs/common';

import { SubjectModule } from './subject/subject.module.js';
import { SubSubjectModule } from './sub-subject/sub-subject.module.js';

const logger = new Logger('v1Module');
logger.log('Hitting v1.module');

@Module({
  imports: [SubjectModule, SubSubjectModule],
})
export class V1Module {}
