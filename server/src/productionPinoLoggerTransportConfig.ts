import type { TransportSingleOptions } from 'pino';
import { developmentPinoLoggerTransportConfig } from './developmentPinoLoggerTransportConfig';
import { lokiUrl } from './lokiUrl';

export const productionPinoLoggerTransportConfig: TransportSingleOptions =
  lokiUrl
    ? {
        target: 'pino-loki',
        options: {
          host: lokiUrl,
          interval: 5,
          json: true,
          labels: { app: 'server' },
        },
      }
    : developmentPinoLoggerTransportConfig;
