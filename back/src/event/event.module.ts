import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './event.entity';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { UserEntity } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity, UserEntity])],
  providers: [EventService],
  controllers: [EventController],
})
export class EventModule {}
