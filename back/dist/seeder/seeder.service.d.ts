import { EventEntity } from 'src/event/event.entity';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from 'typeorm';
export declare class SeederService {
    private readonly userRepository;
    private readonly eventRepository;
    constructor(userRepository: Repository<UserEntity>, eventRepository: Repository<EventEntity>);
    seed(): Promise<void>;
}
