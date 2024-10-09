import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    findAll(): Promise<UserEntity[]>;
    findOne(id: number): Promise<UserEntity>;
    create(user: UserEntity): Promise<UserEntity>;
    update(id: number, user: Partial<UserEntity>): Promise<UserEntity>;
    remove(id: number): Promise<void>;
}
