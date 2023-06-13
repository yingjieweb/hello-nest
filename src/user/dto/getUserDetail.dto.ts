import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class GetUserDetailDto implements PipeTransform {
  async transform(value: string) {
    const targetUserId = parseInt(value);
    if (targetUserId <= 0) {
      throw new BadRequestException('user id is positive number');
    }
  }
}
