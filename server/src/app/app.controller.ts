import { Body, Controller, Get, Logger, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly logger: Logger) {}

  @Get('/health')
  getHealth() {
    return 'healthy';
  }

  @Post('/test')
  test(@Body() body: unknown) {
    this.logger.log({
      msg: 'test',
      source: getTopStackItem(),
    });

    return 'test';
  }
}

const filePathRegExp = /src\/(.*\.ts)/;

function getTopStackItem() {
  return new Error().stack?.match(filePathRegExp)?.[1];
}
