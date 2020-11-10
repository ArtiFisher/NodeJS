import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    level: 'info',
    transports: [
        new transports.Console({
            level: 'info',
            format: format.combine(
                format.timestamp({ format: 'HH:mm:ss' }),
                format.colorize(),
                format.printf(({ level, timestamp, message }) => `${timestamp} ${level}: ${message}`)
            ),
            silent: process.env.NODE_ENV === 'test'
        })
    ]
});
logger.info.bind(logger);

export default logger;
