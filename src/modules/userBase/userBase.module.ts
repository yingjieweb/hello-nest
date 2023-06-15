import { Module } from '@nestjs/common';
import { UserBaseController } from './userBase.controller';
import { UserBaseService } from './userBase.service';

@Module({
  controllers: [UserBaseController],
  providers: [UserBaseService],
})
export class userBaseModule {}
