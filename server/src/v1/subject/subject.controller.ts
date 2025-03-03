import { Body, Controller, Get, Post } from '@nestjs/common';

import { SubjectService } from './subject.service.js';
import { NewSubjectDTO, SubjectEntity } from './subject.entity.js';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  async findAll(): Promise<SubjectEntity[]> {
    return this.subjectService.findAll();
  }

  @Post()
  async create(@Body() newSubjectDTO: NewSubjectDTO): Promise<SubjectEntity> {
    return await this.subjectService.create(newSubjectDTO);
  }
}
