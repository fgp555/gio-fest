// src/event/event.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column()
  time: Date;

  @ManyToMany(() => User, (user) => user.events)
  users: User[];

  @Column({ nullable: true })
  qrCode: string;
}
