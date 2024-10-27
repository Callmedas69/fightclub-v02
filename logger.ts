import pino from 'pino';

const isDevelopment = process.env.NODE_ENV === 'development';

const logger = pino(
  isDevelopment
    ? { transport: { target: 'pino-pretty' } }
    : {}
);

export default logger;
