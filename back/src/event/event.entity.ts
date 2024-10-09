// src/event/event.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity()
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column()
  time: Date;

  @ManyToMany(() => UserEntity, (user) => user.events)
  users: UserEntity[];

  @Column({ nullable: true })
  qrCode: string;
}
