import { Body, Controller, Get, Post } from '@nestjs/common';

import { SubSubjectService } from './sub-subject.service.js';
import { NewSubSubjectDTO, SubSubjectEntity } from './sub-subject.entity.js';

@Controller('sub-subject')
export class SubSubjectController {
  constructor(private readonly subSubjectService: SubSubjectService) {}

  @Get()
  async findAll(): Promise<SubSubjectEntity[]> {
    return this.subSubjectService.findAll();
  }

  @Post()
  async create(@Body() newSubSubjectDTO: NewSubSubjectDTO): Promise<SubSubjectEntity> {
    return await this.subSubjectService.create(newSubSubjectDTO);
  }
}
