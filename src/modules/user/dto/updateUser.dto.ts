import { IsNotEmpty, IsString, IsNumber, IsIn } from 'class-validator';

export class UpdateUserDto {
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
