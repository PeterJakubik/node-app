"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pino_1 = __importDefault(require("pino"));
const logger = pino_1.default({
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
const app = express_1.default();
const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
