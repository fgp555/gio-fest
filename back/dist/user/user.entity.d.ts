import { Event } from '../event/event.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    profilePhoto: string;
    events: Event[];
    qrCode: string;
}
