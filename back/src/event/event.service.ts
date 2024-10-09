import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { User } from '../user/user.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<Event[]> {
    return this.eventRepository.find({ relations: ['users'] });
  }

  findOne(id: number): Promise<Event> {
    return this.eventRepository.findOne({ where: { id }, relations: ['users'] });
  }

  create(event: Event): Promise<Event> {
    return this.eventRepository.save(event);
  }

  async update(id: number, event: Partial<Event>): Promise<Event> {
    await this.eventRepository.update(id, event);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.eventRepository.delete(id);
  }

  // Agregar un usuario a un evento
  async addUserToEvent(eventId: number, userId: number): Promise<Event> {
    const event = await this.eventRepository.findOne({
      where: { id: eventId },
      relations: ['users'],
    });
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!event || !user) {
      throw new Error('Event or User not found');
    }

    event.users.push(user); // Agrega el usuario al evento
    return this.eventRepository.save(event);
  }

  // Eliminar un usuario de un evento
  async removeUserFromEvent(eventId: number, userId: number): Promise<Event> {
    const event = await this.eventRepository.findOne({
      where: { id: eventId },
      relations: ['users'],
    });

    if (!event) {
      throw new Error('Event not found');
    }

    event.users = event.users.filter(user => user.id !== userId); // Elimina el usuario del evento
    return this.eventRepository.save(event);
  }
}
