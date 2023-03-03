import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUser(uuid: string): Promise<User | null> {
    try {
      const user = await this.userRepository.findOneOrFail({ where: { id: +uuid } });
      return user;
    } catch (e) {
      return null;
    }
  }
  
  
  async createUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async updateUser(uuid: string, user: User): Promise<User | null> {
    await this.userRepository.update(uuid, user);
    return this.getUser(uuid);
  }

  async partialUpdateUser(uuid: string, user: Partial<User>): Promise<User | null> {
    await this.userRepository.update(uuid, user);
    return this.getUser(uuid);
  }

  async deleteUser(uuid: string): Promise<boolean> {
    const result = await this.userRepository.delete(uuid);
    return result.affected === 1;
  }
}
