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
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const event_entity_1 = require("./event.entity");
const user_entity_1 = require("../user/user.entity");
let EventService = class EventService {
    constructor(eventRepository, userRepository) {
        this.eventRepository = eventRepository;
        this.userRepository = userRepository;
    }
    findAll() {
        return this.eventRepository.find({ relations: ['users'] });
    }
    findOne(id) {
        return this.eventRepository.findOne({ where: { id }, relations: ['users'] });
    }
    create(event) {
        return this.eventRepository.save(event);
    }
    async update(id, event) {
        await this.eventRepository.update(id, event);
        return this.findOne(id);
    }
    async remove(id) {
        await this.eventRepository.delete(id);
    }
    async addUserToEvent(eventId, userId) {
        const event = await this.eventRepository.findOne({
            where: { id: eventId },
            relations: ['users'],
        });
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!event || !user) {
            throw new Error('Event or User not found');
        }
        event.users.push(user);
        return this.eventRepository.save(event);
    }
    async removeUserFromEvent(eventId, userId) {
        const event = await this.eventRepository.findOne({
            where: { id: eventId },
            relations: ['users'],
        });
        if (!event) {
            throw new Error('Event not found');
        }
        event.users = event.users.filter(user => user.id !== userId);
        return this.eventRepository.save(event);
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EventService);
//# sourceMappingURL=event.service.js.map