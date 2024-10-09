// src/user/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Event } from '../event/event.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({ nullable: true })
  profilePhoto: string;

  @ManyToMany(() => Event, (event) => event.users)
  @JoinTable()  // Esto indica que `User` es la tabla dueña de la relación.
  events: Event[];

  @Column({ nullable: true })
  qrCode: string;
}
