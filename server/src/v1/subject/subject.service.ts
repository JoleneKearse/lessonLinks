import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';

import { NewSubjectDTO, SubjectEntity } from './subject.entity.js';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(SubjectEntity)
    private readonly subjectRepository: Repository<SubjectEntity>,
  ) {}

  async findAll(): Promise<SubjectEntity[]> {
    const subjects = await this.subjectRepository.find();
    if (subjects.length === 0) {
      throw new NotFoundException('No subjects found.');
    }
    return subjects;
  }

  async create(newSubjectDTO: NewSubjectDTO): Promise<SubjectEntity> {
    try {
      const subject = this.subjectRepository.create(newSubjectDTO);
      return await this.subjectRepository.save(subject);
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        error.message.includes('unique constraint')
      ) {
        throw new ConflictException('A subject with this name already exists.');
      }
      throw error;
    }
  }
}
