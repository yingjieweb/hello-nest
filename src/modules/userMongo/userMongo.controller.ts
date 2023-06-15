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
  // Res,
} from '@nestjs/common';
import { UserMongoService } from './userMongo.service';
import { AddUserDto } from './dto/addUser.dto';
import { GetUserDetailDto } from './dto/getUserDetail.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { DeleteUserDto } from './dto/deleteUser.dto';
import { UserItem } from 'src/core/types/user';
import { SUCCESS_RES, ERROR_RES } from 'src/core/utils/resWrapper.util';
// import { Response } from 'express';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@Controller('/userMongo')
@ApiTags('用户相关接口')
export class UserMongoController {
  constructor(private readonly userMongoService: UserMongoService) {}

  @Get('/getUserList')
  async getUserList(): Promise<Common.CommonRes<UserItem[]>> {
    const userList = await this.userMongoService.getUserList();
    return SUCCESS_RES(userList);
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
  async addUser(
    @Body() userData: AddUserDto,
  ): Promise<Common.CommonRes<string>> {
    await this.userMongoService.addUser(userData);
    return SUCCESS_RES('Adding a user succeeded');
  }

  // 通过 @HttpCode 设置状态码
  // @Get('getUserDetail/:id')
  // @HttpCode(200)
  // getUserDetail(
  //   @Param('id', GetUserDetailDto) id: string,
  // ): UserItem | HttpException {
  //   const targetUser = this.userMongoService.getUserDetail(id);
  //   if (targetUser) {
  //     return targetUser;
  //   } else {
  //     throw new HttpException('User was not found', HttpStatus.NOT_FOUND);
  //   }
  // }

  // 通过 @Res 设置状态码
  // @Get('getUserDetail/:id')
  // getUserDetail(
  //   @Param('id', GetUserDetailDto) id: string,
  //   @Res() res: Response,
  // ): void {
  //   const targetUser = this.userMongoService.getUserDetail(id);
  //   if (targetUser) {
  //     res.status(200).json(SUCCESS_RES(targetUser));
  //   } else {
  //     res.status(404).json(ERROR_RES('User was not found'));
  //   }
  // }

  @Get('getUserDetail/:id')
  async getUserDetail(
    @Param('id', GetUserDetailDto) id: string,
  ): Promise<UserItem | null> {
    return this.userMongoService.getUserDetail(id);
  }

  @Put('updateUser')
  async updateUser(
    @Body() userData: UpdateUserDto,
  ): Promise<Common.CommonRes<string>> {
    await this.userMongoService.updateUser(userData);
    return SUCCESS_RES('Updating a user succeeded');
  }

  @Delete('deleteUser')
  async deleteUser(
    @Query() query: DeleteUserDto,
  ): Promise<Common.CommonRes<string>> {
    const res = await this.userMongoService.deleteUser(query.id);
    return SUCCESS_RES('Deleting a user succeeded');
  }
}
