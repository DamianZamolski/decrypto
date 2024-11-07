import { LoggerModule } from 'nestjs-pino';
import { isProduction } from './isProduction';
import { pinoLoggerConfig } from './loggerConfig';

export const pinoLoggerModule = LoggerModule.forRoot({
  pinoHttp: {
    level: isProduction ? 'info' : 'debug',
    transport: pinoLoggerConfig,
    formatters: {
      level: (label: string) => ({ level: label }),
    },
    customSuccessMessage: () => `request success`,
  },
});
