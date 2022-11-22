import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/login')
  getLogin(@Req() req: Request, @Res() res: Response): string {
    return this.appService.getLogin(req, res);
  }

  @Get('/hi')
  getHi(@Req() request: Request): object {
    return request.body;
  }

}