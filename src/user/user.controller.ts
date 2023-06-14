import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AddUserDto } from './dto/addUser.dto';
import { GetUserDetailDto } from './dto/getUserDetail.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { DeleteUserDto } from './dto/deleteUser.dto';
import { UserItem } from 'src/core/types/user';
import { Response } from 'express';

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
  getUserDetail(
    @Param('id', GetUserDetailDto) id: string,
    @Res() res: Response,
  ): void {
    const targetUser = this.userService.getUserDetail(id);
    if (targetUser) {
      res.status(200).json(targetUser);
    } else {
      res.status(404).json({ message: 'User was not found' });
    }
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
