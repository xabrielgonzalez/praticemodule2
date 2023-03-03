import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from '../contacts.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}

  async getContacts(): Promise<Contact[]> {
    return this.contactRepository.find();
  }

  async getContact(uuid: string): Promise<Contact | null> {
    try {
      const contact = await this.contactRepository.findOneOrFail({ where: { uuid } });
      return contact;
    } catch (e) {
      return null;
    }
  }
  
  async createContact(contact: Contact): Promise<Contact> {
    return this.contactRepository.save(contact);
  }

  async updateContact(uuid: string, contact: Contact): Promise<Contact | null> {
    await this.contactRepository.update(uuid, contact);
    return this.getContact(uuid);
  }

  async deleteContact(uuid: string): Promise<boolean> {
    const result = await this.contactRepository.delete(uuid);
    return result.affected === 1;
  }
}
