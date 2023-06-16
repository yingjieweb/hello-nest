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
import { UserBaseService } from './userBase.service';
import { UserItem } from 'src/core/types/user';

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

  @Get('getUserDetail/:id')
  getUserDetail(@Param('id') id: string): UserItem {
    return this.userBaseService.getUserDetail(id);
  }

  @Put('updateUser')
  updateUser(@Body() userData): UserItem[] {
    return this.userBaseService.updateUser(userData);
  }

  @Delete('deleteUser')
  deleteUser(@Query() query): UserItem[] {
    return this.userBaseService.deleteUser(query.id);
  }
}
