import type { TransportMultiOptions, TransportSingleOptions } from 'pino';
import { isProduction } from './isProduction';
import { productionPinoLoggerTransportConfig } from './productionPinoLoggerTransportConfig';
import { developmentPinoLoggerTransportConfig } from './developmentPinoLoggerTransportConfig';

export const pinoLoggerConfig: TransportSingleOptions | TransportMultiOptions =
  isProduction
    ? productionPinoLoggerTransportConfig
    : developmentPinoLoggerTransportConfig;
