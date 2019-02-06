import { HttpException, PipeTransform, Injectable, ArgumentMetadata, HttpStatus } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new HttpException('检验错误', HttpStatus.BAD_REQUEST);
    }
    return val;
  }
}