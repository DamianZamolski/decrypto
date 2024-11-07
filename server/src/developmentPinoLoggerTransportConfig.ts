import type { TransportSingleOptions } from 'pino';

export const developmentPinoLoggerTransportConfig: TransportSingleOptions = {
  target: 'pino-pretty',
  options: {
    colorize: true,
  },
};
