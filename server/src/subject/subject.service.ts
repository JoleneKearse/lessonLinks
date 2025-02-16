import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './subject.entity.js';
import { CreateSubjectDto } from './subject.dto.js';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>
  ) {}

  async create(createSubjectDTO: CreateSubjectDto): Promise<Subject> {
    const subject = this.subjectRepository.create(createSubjectDTO);
    return this.subjectRepository.save(subject);
  }

  async findAll(): Promise<Subject[]> {
    return this.subjectRepository.find();
  }

  async findOne(id: string): Promise<Subject | null> {
    return this.subjectRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.subjectRepository.delete(id);
  }
}
