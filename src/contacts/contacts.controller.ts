import { Controller, Get } from '@nestjs/common';
import { ContactService } from './contact/contact.service';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get('message')
  getMessage(): string {
    return this.contactService.sayHello();
  }
}
