import 'source-map-support/register';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { WsAdapter } from '@nestjs/platform-ws';

async function main() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(Logger));
  app.useWebSocketAdapter(new WsAdapter(app));
  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const documentConfig = new DocumentBuilder().setTitle('server').build();
  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('/', app, document);

  await app.listen(process.env.PORT ?? 7777);
}

void main();
