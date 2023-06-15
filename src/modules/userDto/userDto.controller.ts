import {
  Body,
  Controller,
  Delete,
  Get,
  // HttpCode,
  // HttpException,
  // HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { UserDtoService } from './userDto.service';
import { AddUserDto } from './dto/addUser.dto';
import { GetUserDetailDto } from './dto/getUserDetail.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { DeleteUserDto } from './dto/deleteUser.dto';
import { UserItem } from 'src/core/types/user';
import { SUCCESS_RES, ERROR_RES } from 'src/core/utils/resWrapper.util';
import { Response } from 'express';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@Controller('/userDto')
@ApiTags('用户相关接口')
export class UserDtoController {
  constructor(private readonly userDtoService: UserDtoService) {}

  @Get('/getUserList')
  getUserList(): Common.CommonRes<UserItem[]> {
    const userList = this.userDtoService.getUserList();
    return SUCCESS_RES(userList, 'success');
  }

  @Post('addUser')
  @ApiOperation({
    summary: '获取用户列表',
    // description: '获取所有的用户列表',
  })
  @ApiResponse({
    status: 200,
    description: '成功返回 200',
    schema: {
      type: 'array',
      example: [
        {
          id: 1,
          name: '张三',
          age: 18,
          gender: 1,
        },
      ],
    },
  })
  addUser(@Body() userData: AddUserDto): UserItem[] {
    return this.userDtoService.addUser(userData);
  }

  // @Get('getUserDetail/:id')
  // @HttpCode(200)
  // getUserDetail(
  //   @Param('id', GetUserDetailDto) id: string,
  // ): UserItem | HttpException {
  //   const targetUser = this.userDtoService.getUserDetail(id);
  //   if (targetUser) {
  //     return targetUser;
  //   } else {
  //     throw new HttpException('User was not found', HttpStatus.NOT_FOUND);
  //   }
  // }

  @Get('getUserDetail/:id')
  getUserDetail(
    @Param('id', GetUserDetailDto) id: string,
    @Res() res: Response,
  ): void {
    const targetUser = this.userDtoService.getUserDetail(id);
    if (targetUser) {
      res.status(200).json(SUCCESS_RES(targetUser));
    } else {
      res.status(404).json(ERROR_RES('User was not found'));
    }
  }

  @Put('updateUser')
  updateUser(@Body() userData: UpdateUserDto): UserItem[] {
    return this.userDtoService.updateUser(userData);
  }

  @Delete('deleteUser')
  deleteUser(@Query() query: DeleteUserDto): UserItem[] {
    return this.userDtoService.deleteUser(query.id);
  }
}
