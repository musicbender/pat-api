import { createLogger, format, Logger, transports } from 'winston';

const logger: Logger = createLogger({
  silent: !process.env.PATAPI_LOGGING_ENABLED,
  transports: [
    new transports.Console({
      silent: process.env.NODE_ENV === 'test',
    }),
    new transports.Console({
      silent: process.env.NODE_ENV !== 'test',
      level: 'error',
    }),
  ],
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.prettyPrint(),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level}: ${message}`;
    }),
  ),
});

export default logger;
