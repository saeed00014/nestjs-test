import { Body, Controller, Get, Headers, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() body: any): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
    @Headers() headers,
  ) {
    console.log(request.headers, headers);
    return { name: 'klsdjf' };
  }
}
