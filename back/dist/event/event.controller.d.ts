import { EventService } from './event.service';
import { EventEntity } from './event.entity';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    findAll(): Promise<EventEntity[]>;
    findOne(id: number): Promise<EventEntity>;
    create(event: EventEntity): Promise<EventEntity>;
    update(id: number, event: Partial<EventEntity>): Promise<EventEntity>;
    remove(id: number): Promise<void>;
    addUserToEvent(eventId: number, userId: number): Promise<EventEntity>;
    removeUserFromEvent(eventId: number, userId: number): Promise<EventEntity>;
}
