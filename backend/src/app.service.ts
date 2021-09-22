import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the ElianCodes API';
  }

  checkHealth(): string {
    return 'Health seems fine'
  }
}
