import { UserEntity } from '../user/user.entity';
export declare class EventEntity {
    id: number;
    name: string;
    date: Date;
    time: Date;
    users: UserEntity[];
    qrCode: string;
}
