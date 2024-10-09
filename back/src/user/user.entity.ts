// src/user/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { EventEntity } from '../event/event.entity';

@Entity()
export class UserEntity {
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

  @ManyToMany(() => EventEntity, (event) => event.users)
  @JoinTable()  // Esto indica que `User` es la tabla dueña de la relación.
  events: EventEntity[];

  @Column({ nullable: true })
  qrCode: string;
}
