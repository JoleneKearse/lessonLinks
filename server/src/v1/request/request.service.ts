import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 
import { RequestEntity, NewRequestDTO } from './request.entity.js';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(RequestEntity)
    private readonly requestRepository: Repository<RequestEntity>,
  ) {}

  async findAll(): Promise<RequestEntity[]> {
    return this.requestRepository.find();
  }

  async create(newRequestDTO: NewRequestDTO): Promise<RequestEntity> {
    const request = this.requestRepository.create(newRequestDTO);
    const savedRequest = await this.requestRepository.save(request);
    return savedRequest;
  }
}