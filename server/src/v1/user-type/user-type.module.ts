import { Module } from '@nestjs/common';
import { UserTypeEntity } from './user-type.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserTypeEntity]),
  ],
  exports: [TypeOrmModule],
})
export class UserTypeModule {}
