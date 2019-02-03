import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomForbiddenException extends HttpException {
  constructor () {
    super('禁止访问!', HttpStatus.FORBIDDEN);
  }
}