import { IsNotEmpty, IsString, IsNumber, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '张三', description: '用户名' })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 18, description: '用户年龄' })
  age: number;

  @IsNotEmpty()
  @IsIn([1, 2])
  @ApiProperty({ example: 1, description: '用户性别： 1 -> 男、2 -> 女' })
  gender: 1 | 2;
}
