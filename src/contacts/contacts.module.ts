import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Contact } from './contacts.entity';
import { ContactService } from './contact/contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  async getContacts(): Promise<Contact[]> {
    return this.contactService.getContacts();
  }

  @Get(':uuid')
  async getContact(@Param('uuid') uuid: string): Promise<Contact | null> {
    return this.contactService.getContact(uuid);
  }

  @Post()
  async createContact(@Body() contact: Contact): Promise<Contact> {
    return this.contactService.createContact(contact);
  }

  @Put(':uuid')
  async updateContact(@Param('uuid') uuid: string, @Body() contact: Contact): Promise<Contact> {
    const updatedContact = await this.contactService.updateContact(uuid, contact);
    return updatedContact ?? { uuid: "", usuarioUuid: "", nombre: "", apellidos: "", telefono: "", correo: "" };

  }

  @Delete(':uuid')
  async deleteContact(@Param('uuid') uuid: string): Promise<boolean> {
    return this.contactService.deleteContact(uuid);
  }
}
