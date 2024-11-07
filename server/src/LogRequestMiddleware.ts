import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { pick } from './pick';

@Injectable()
export class LogRequestMiddleware implements NestMiddleware {
  constructor(private readonly logger: Logger) {}

  use(request: Request, _response: Response, next: NextFunction) {
    this.logger.log({
      msg: 'request',
      ...pick(request, ['method', 'url', 'headers', 'query', 'body']),
    });

    next();
  }
}
