import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserBaseService } from './userBase.service';

export type UserItem = {
  id?: number;
  name: string;
  age: number;
  gender: 1 | 2;
};

@Controller('/userBase')
export class UserBaseController {
  constructor(private readonly userBaseService: UserBaseService) {}

  @Get('/getUserList')
  getUserList(): UserItem[] {
    return this.userBaseService.getUserList();
  }

  @Post('addUser')
  addUser(@Body() userData): UserItem[] {
    return this.userBaseService.addUser(userData);
  }

  @Put('updateUser')
  updateUser(@Body() userData): UserItem[] {
    return this.userBaseService.updateUser(userData);
  }

  @Delete('deleteUser/:id')
  deleteUser(@Param('id') id): UserItem[] {
    return this.userBaseService.deleteUser(id);
  }
}
