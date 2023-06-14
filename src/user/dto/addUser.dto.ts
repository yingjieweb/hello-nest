import { IsNotEmpty, IsString, IsNumber, IsIn } from 'class-validator';

export class AddUserDto {
  @IsNotEmpty({ message: 'id should not be empty' })
  @IsNumber({ allowNaN: false }, { message: 'id must be a number' })
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
