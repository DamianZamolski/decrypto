import { HttpModule } from '@nestjs/axios';
import { Logger, MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { pinoLoggerModule } from './pinoLoggerModule';
import { LogRequestMiddleware } from './LogRequestMiddleware';
import { Gateway } from './Gateway';
import { AppController } from './app/app.controller';
import { AuthUserMiddleware } from './AuthUserMiddleware';
import { RoomsController } from './RoomsController';
import { Database } from './Database';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule,
    pinoLoggerModule,
  ],
  providers: [Database, Logger, Gateway],
  controllers: [AppController, RoomsController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogRequestMiddleware)
      .forRoutes('*')
      .apply(AuthUserMiddleware)
      .forRoutes('*');
  }
}
