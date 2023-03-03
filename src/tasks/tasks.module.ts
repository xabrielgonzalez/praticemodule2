import { Module } from '@nestjs/common';
import { TaskController } from './tasks.controller';
import { TaskService } from './task/task.service';
@Module({
  controllers: [TaskController],
  providers: [
    TaskService,
  ],
})
export class TasksModule {}
