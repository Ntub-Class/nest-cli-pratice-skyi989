import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNews(): string {
    return 'Hello World!';
  }
}
