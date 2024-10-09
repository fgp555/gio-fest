import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { User } from '../user/user.entity';
export declare class EventService {
    private eventRepository;
    private userRepository;
    constructor(eventRepository: Repository<Event>, userRepository: Repository<User>);
    findAll(): Promise<Event[]>;
    findOne(id: number): Promise<Event>;
    create(event: Event): Promise<Event>;
    update(id: number, event: Partial<Event>): Promise<Event>;
    remove(id: number): Promise<void>;
    addUserToEvent(eventId: number, userId: number): Promise<Event>;
    removeUserFromEvent(eventId: number, userId: number): Promise<Event>;
}
