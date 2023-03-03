import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
  sayHello() {
    return 'Hola desde el servicio de Contacts';
  }
}
