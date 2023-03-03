import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  sayHello() {
    return 'Hola desde el servicio de Users';
  }
}