import { Controller, Get, Post, Put, Patch, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user/user.service';
import { User } from './users.entity'; // se corrige la ruta de importación

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get(':uuid')
  async getUser(@Param('uuid') uuid: string): Promise<User | null> {
    return this.userService.getUser(uuid);
  }


  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @Put(':uuid')
  async updateUser(@Param('uuid') uuid: string, @Body() user: User): Promise<User | null> {
    const updatedUser = await this.userService.updateUser(uuid, user);
    return updatedUser ?? null; // Devolver null si updatedUser es null
  }
  


  @Patch(':uuid')
async partialUpdateUser(@Param('uuid') uuid: string, @Body() user: Partial<User>): Promise<User | null> {
  const updatedUser = await this.userService.partialUpdateUser(uuid, user as User);
  return updatedUser ?? null; // Devolver null si updatedUser es null
}


  @Delete(':uuid')
  async deleteUser(@Param('uuid') uuid: string): Promise<boolean> {
    return this.userService.deleteUser(uuid);
  }
}
