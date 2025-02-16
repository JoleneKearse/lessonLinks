import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SubjectService } from './subject.service.js';
import { CreateSubjectDto } from './subject.dto.js';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectService.create(createSubjectDto);
  }

  @Get()
  findAll() {
    return this.subjectService.findAll();
  }

  @Get(":id") 
  findOne(@Param("id") id: string) {
    return this.subjectService.findOne(id);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.subjectService.remove(id);
  }
}
