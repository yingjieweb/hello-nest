import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class GetUserDetailDto implements PipeTransform {
  async transform(value: string) {
    if (!value) {
      throw new BadRequestException('UserId is required');
    }
    return value;
  }
}
