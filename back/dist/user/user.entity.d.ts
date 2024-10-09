import { EventEntity } from '../event/event.entity';
export declare class UserEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    profilePhoto: string;
    events: EventEntity[];
    qrCode: string;
}
