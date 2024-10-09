import { UserService } from './user.service';
import { UserEntity } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<UserEntity[]>;
    findOne(id: number): Promise<UserEntity>;
    create(user: UserEntity): Promise<UserEntity>;
    update(id: number, user: Partial<UserEntity>): Promise<UserEntity>;
    remove(id: number): Promise<void>;
}
