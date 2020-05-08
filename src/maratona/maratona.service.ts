import { Injectable } from '@nestjs/common';

@Injectable()
export class MaratonaService {
  getHello(): string {
    return 'Hello World!';
  }
}
