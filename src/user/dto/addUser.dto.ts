import { IsNotEmpty, IsString, IsNumber, IsIn } from 'class-validator';

export class AddUserDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsIn([1, 2])
  gender: 1 | 2;
}
