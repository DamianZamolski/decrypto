import { HttpModule } from '@nestjs/axios';
import { Logger, MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { pinoLoggerModule } from './pinoLoggerModule';
import { LogRequestMiddleware } from './LogRequestMiddleware';
import { Gateway } from './Gateway';
import { AppController } from './app/app.controller';
import { AuthUserMiddleware } from './AuthUserMiddleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule,
    pinoLoggerModule,
  ],
  providers: [Logger, Gateway],
  controllers: [AppController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogRequestMiddleware)
      .forRoutes(AppController)
      .apply(AuthUserMiddleware)
      .forRoutes(AppController);
  }
}
