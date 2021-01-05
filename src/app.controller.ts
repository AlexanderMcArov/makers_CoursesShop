import { Controller, Request, Post, UseGuards, Get, Module, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()

export class AppController {
  constructor(private readonly appService: AppService) {
  }


  @Get()
  @Render('index')
  index() {
    return this.appService.getSettings()
  }

  @Get('/courses')
  @Render('courses')
  courses() {
    return this.appService.getSettings()
  }

  @Get('/elements')
  @Render('elements')
  elements() {
    return
  }

  // @UseGuards(AuthGuard('local'))
  // @Post('auth/login')
  // async login(@Request() req) {
  //   return req.user;
  // }

}
