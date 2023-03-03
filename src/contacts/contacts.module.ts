import { Module } from '@nestjs/common';
import { ContactController } from './contacts.controller';
import { ContactService } from './contact/contact.service';

@Module({
  controllers: [ContactController],
  providers: [
    ContactService,
  ],
})


export class ContactsModule {}


