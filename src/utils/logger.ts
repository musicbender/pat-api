import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  transports: [new transports.Console()],
  silent: false,
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${level}: ${message} [${timestamp}]`;
    }),
  ),
});

export default logger;
