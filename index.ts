import express from 'express';
import pino from 'pino';

const logger = pino({
    level: 'info',
    timestamp: () => `,"time":"${new Date().toISOString()}"`
});

logger.info('hello elastic world');
logger.info('This is some great stuff');
logger.info('Some more entries for our logging');
logger.info('another line');
logger.info('This never stops');
logger.info('Logging logging all the way');
logger.info('I think this is enough');
logger.info('nope, one more!');


// rest of the code remains same
const app = express();
const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});