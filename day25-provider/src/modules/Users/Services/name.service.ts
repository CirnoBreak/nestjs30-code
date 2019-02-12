import { Injectable } from '@nestjs/common';

@Injectable()
export class NameService {
  newName(): string {
    return "Tommy";
  }
}