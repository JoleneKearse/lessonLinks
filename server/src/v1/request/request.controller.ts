import { Body, Controller, Get, Post } from '@nestjs/common';
import { RequestService } from './request.service.js';
import { RequestEntity, NewRequestDTO } from './request.entity.js';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get()
  async findAll(): Promise<RequestEntity[]> {
    return this.requestService.findAll();
  }

  @Post()
  async create(
    @Body() newRequestDTO: NewRequestDTO): Promise<RequestEntity> {
    return await this.requestService.create(newRequestDTO);
  }
}