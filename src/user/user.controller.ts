import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AddUserDto } from './dto/addUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

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
  addUser(@Body() userData: AddUserDto): UserItem[] {
    return this.userService.addUser(userData);
  }

  @Put('updateUser')
  updateUser(@Body() userData: UpdateUserDto): UserItem[] {
    return this.userService.updateUser(userData);
  }

  @Delete('deleteUser/:id')
  deleteUser(@Param('id', ValidationPipe) id: string): UserItem[] {
    return this.userService.deleteUser(id);
  }
}
