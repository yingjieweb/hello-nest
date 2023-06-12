import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';

export type UserItem = {
  id?: number;
  name: string;
  age: number;
  gender: 1 | 2;
};

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/getUserList')
  getUserList(): UserItem[] {
    return this.userService.getUserList();
  }

  @Post('addUser')
  addUser(@Body() userData): UserItem[] {
    return this.userService.addUser(userData);
  }

  @Put('updateUser')
  updateUser(@Body() userData): UserItem[] {
    return this.userService.updateUser(userData);
  }

  @Delete('deleteUser/:id')
  deleteUser(@Param('id') id): UserItem[] {
    return this.userService.deleteUser(id);
  }
}
