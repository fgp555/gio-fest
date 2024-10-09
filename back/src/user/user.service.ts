import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find({ relations: ['events'] });
  }

  findOne(id: number): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: { id },
      relations: ['events'],
    });
  }

  create(user: UserEntity): Promise<UserEntity> {
    return this.userRepository.save(user);
  }

  async update(id: number, user: Partial<UserEntity>): Promise<UserEntity> {
    await this.userRepository.update(id, user);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
