import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { nanoid } from 'nanoid';

@Injectable()
export class AuthUserMiddleware implements NestMiddleware {
  private readonly logger = new Logger();

  use(request: Request, response: Response, next: NextFunction) {
    this.logger.log({ msg: 'cookies', cookies: request.cookies });

    if (!request.cookies?.sessionId) {
      this.logger.log({ msg: 'setting cookie' });
      response.cookie('sessionId', nanoid());
    }

    next();
  }
}
