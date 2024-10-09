import { Repository } from 'typeorm';
import { EventEntity } from './event.entity';
import { UserEntity } from '../user/user.entity';
export declare class EventService {
    private eventRepository;
    private userRepository;
    constructor(eventRepository: Repository<EventEntity>, userRepository: Repository<UserEntity>);
    findAll(): Promise<EventEntity[]>;
    findOne(id: number): Promise<EventEntity>;
    create(event: EventEntity): Promise<EventEntity>;
    update(id: number, event: Partial<EventEntity>): Promise<EventEntity>;
    remove(id: number): Promise<void>;
    addUserToEvent(eventId: number, userId: number): Promise<EventEntity>;
    removeUserFromEvent(eventId: number, userId: number): Promise<EventEntity>;
}
