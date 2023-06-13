import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AddUserDto } from './dto/addUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { DeleteUserDto } from './dto/deleteUser.dto';

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

  @Get('getUserDetail/:id')
  getUserDetail(@Param('id') id: string): UserItem {
    return this.userService.getUserDetail(id);
  }

  @Put('updateUser')
  updateUser(@Body() userData: UpdateUserDto): UserItem[] {
    return this.userService.updateUser(userData);
  }

  @Delete('deleteUser')
  deleteUser(@Query() query: DeleteUserDto): UserItem[] {
    return this.userService.deleteUser(query.id);
  }
}
