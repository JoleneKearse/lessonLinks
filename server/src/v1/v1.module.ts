import { Module, Logger } from '@nestjs/common';
import { SubjectModule } from './subject/subject.module.js';
import { SubSubjectModule } from './sub-subject/sub-subject.module.js';
import { UserModule } from './user/user.module.js';
import { UserTypeModule } from './user-type/user-type.module.js';
import { TagModule } from './tag/tag.module.js';
import { ResourceModule } from './resource/resource.module.js';
import { RequestModule } from './request/request.module.js';

const logger = new Logger('v1Module');
logger.log('Hitting v1.module');

@Module({
  imports: [
    SubjectModule,
    SubSubjectModule,
    UserModule,
    UserTypeModule,
    TagModule,
    ResourceModule,
    RequestModule,
  ],
})
export class V1Module {}
