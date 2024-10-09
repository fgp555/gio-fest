// src/seeder/seeder.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEntity } from 'src/event/event.entity';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,
  ) {}

  async seed() {
    // Datos de usuarios
    const usersData = [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'strongpassword', // Asegúrate de hashear la contraseña
        isAdmin: false,
        profilePhoto: 'https://i.postimg.cc/15c4wxR6/frank.jpg',
        qrCode: 'https://gio.fgp.one/index.html?userId=1',
      },
      {
        name: 'Gio MR',
        email: 'gio@example.com',
        password: 'strongpassword', // Asegúrate de hashear la contraseña
        isAdmin: false,
        profilePhoto: 'https://i.postimg.cc/bwmJVQtw/gio.jpg',
        qrCode: 'https://gio.fgp.one/index.html?userId=2',
      },
    ];

    // Datos de eventos
    const eventsData = [
      {
        name: 'Tech Conference 2024',
        date: new Date('2024-11-25'),
        time: new Date('2024-11-25T09:00:00Z'),
        qrCode: 'http://example.com/qrcode1.png',
      },
      {
        name: 'Tech Conference 2025',
        date: new Date('2025-11-25'),
        time: new Date('2025-11-25T09:00:00Z'),
        qrCode: 'http://example.com/qrcode2.png',
      },
      {
        name: 'Tech Conference 2026',
        date: new Date('2026-11-25'),
        time: new Date('2026-11-25T09:00:00Z'),
        qrCode: 'http://example.com/qrcode3.png',
      },
    ];

    // Guardar usuarios
    const savedUsers = [];
    for (const userData of usersData) {
      const user = await this.userRepository.save(userData);
      savedUsers.push(user);
    }

    // Guardar eventos y asignar a usuarios
    for (let i = 0; i < savedUsers.length; i++) {
      const user = savedUsers[i];

      // Obtener dos eventos para cada usuario
      const events = eventsData.slice(i * 2, i * 2 + 2); // Dos eventos por usuario
      const savedEvents = await this.eventRepository.save(events);

      // Asignar eventos a usuario
      user.events = savedEvents; // Asignar los eventos guardados al usuario
      await this.userRepository.save(user); // Actualizar el usuario con los eventos
    }

    console.log('Datos de prueba creados con éxito');
  }
}
