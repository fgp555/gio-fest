"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const event_entity_1 = require("../event/event.entity");
const user_entity_1 = require("../user/user.entity");
const typeorm_2 = require("typeorm");
let SeederService = class SeederService {
    constructor(userRepository, eventRepository) {
        this.userRepository = userRepository;
        this.eventRepository = eventRepository;
    }
    async seed() {
        const usersData = [
            {
                name: 'John Doe',
                email: 'john.doe@example.com',
                password: 'strongpassword',
                isAdmin: false,
                profilePhoto: 'https://i.postimg.cc/15c4wxR6/frank.jpg',
                qrCode: 'https://gio.fgp.one/index.html?userId=1',
            },
            {
                name: 'Gio MR',
                email: 'gio@example.com',
                password: 'strongpassword',
                isAdmin: false,
                profilePhoto: 'https://i.postimg.cc/bwmJVQtw/gio.jpg',
                qrCode: 'https://gio.fgp.one/index.html?userId=2',
            },
        ];
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
        const savedUsers = [];
        for (const userData of usersData) {
            const user = await this.userRepository.save(userData);
            savedUsers.push(user);
        }
        for (let i = 0; i < savedUsers.length; i++) {
            const user = savedUsers[i];
            const events = eventsData.slice(i * 2, i * 2 + 2);
            const savedEvents = await this.eventRepository.save(events);
            user.events = savedEvents;
            await this.userRepository.save(user);
        }
        console.log('Datos de prueba creados con éxito');
    }
};
exports.SeederService = SeederService;
exports.SeederService = SeederService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(event_entity_1.EventEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SeederService);
//# sourceMappingURL=seeder.service.js.map