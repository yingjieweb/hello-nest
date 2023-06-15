import { Module } from '@nestjs/common';
import { UserDtoController } from './userDto.controller';
import { UserDtoService } from './userDto.service';

@Module({
  controllers: [UserDtoController],
  providers: [UserDtoService],
})
export class UserDtoModule {}
