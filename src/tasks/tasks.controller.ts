import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task/task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('message')
  getMessage(): string {
    return this.taskService.sayHello();
  }
}
