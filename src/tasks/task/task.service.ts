import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  sayHello() {
    return 'Hola desde el servicio de Tasks';
  }
}