import z from 'zod';
import { Body, Controller, Logger, Post } from '@nestjs/common';

export const reposSchema = z.array(z.object({ name: z.string() }));

export type Repos = z.infer<typeof reposSchema>;

@Controller()
export class AppController {
  constructor(private readonly logger: Logger) {}

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