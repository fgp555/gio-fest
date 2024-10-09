import { EventService } from './event.service';
import { Event } from './event.entity';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    findAll(): Promise<Event[]>;
    findOne(id: number): Promise<Event>;
    create(event: Event): Promise<Event>;
    update(id: number, event: Partial<Event>): Promise<Event>;
    remove(id: number): Promise<void>;
    addUserToEvent(eventId: number, userId: number): Promise<Event>;
    removeUserFromEvent(eventId: number, userId: number): Promise<Event>;
}
