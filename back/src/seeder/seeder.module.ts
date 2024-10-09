// src/seeder/seeder.module.ts

import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';
import { EventEntity } from 'src/event/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, EventEntity])],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
