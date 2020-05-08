import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sender')
  sender(@Res() res: Response) {
    res.sendFile('send.html', {
      root: join(__dirname, 'templates'),
    });
  }

  @Get('receiver')
  receiver(@Res() res: Response) {
    res.sendFile('receive.html', {
      root: join(__dirname, 'templates'),
    });
  }
}