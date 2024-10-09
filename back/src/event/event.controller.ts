import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EventService } from './event.service';
import { EventEntity } from './event.entity';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.eventService.findOne(id);
  }

  @Post()
  create(@Body() event: EventEntity) {
    return this.eventService.create(event);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() event: Partial<EventEntity>) {
    return this.eventService.update(id, event);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.eventService.remove(id);
  }

  // Método para agregar un usuario a un evento
  @Post(':eventId/users/:userId')
  addUserToEvent(
    @Param('eventId') eventId: number,
    @Param('userId') userId: number,
  ) {
    return this.eventService.addUserToEvent(eventId, userId);
  }

  // Método para eliminar un usuario de un evento
  @Delete(':eventId/users/:userId')
  removeUserFromEvent(
    @Param('eventId') eventId: number,
    @Param('userId') userId: number,
  ) {
    return this.eventService.removeUserFromEvent(eventId, userId);
  }
}
