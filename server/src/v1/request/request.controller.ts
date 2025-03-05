import { Controller, Get } from '@nestjs/common';
import { RequestService } from './request.service.js';
import { RequestEntity } from './request.entity.js';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get()
  async findAll(): Promise<RequestEntity[]> {
    return this.requestService.findAll();
  }
}