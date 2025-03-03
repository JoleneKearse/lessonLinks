import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';

import { NewSubSubjectDTO, SubSubjectEntity } from './sub-subject.entity.js';

@Injectable()
export class SubSubjectService {
  constructor(
    @InjectRepository(SubSubjectEntity)
    private readonly subSubjectRepository: Repository<SubSubjectEntity>,
  ) {}

  async findAll(): Promise<SubSubjectEntity[]> {
    const subSubjects = await this.subSubjectRepository.find();
    if (subSubjects.length === 0) {
      throw new NotFoundException('No subSubjects found.');
    }
    return subSubjects;
  }

  async create(newSubSubjectDTO: NewSubSubjectDTO): Promise<SubSubjectEntity> {
    try {
      newSubSubjectDTO.name = newSubSubjectDTO.name.toLowerCase();

      const subSubject = this.subSubjectRepository.create(newSubSubjectDTO);
      return await this.subSubjectRepository.save(subSubject);
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
