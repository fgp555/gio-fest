import { User } from '../user/user.entity';
export declare class Event {
    id: number;
    name: string;
    date: Date;
    time: Date;
    users: User[];
    qrCode: string;
}
