import express from 'express';
import router from './api';
import dotenv from 'dotenv';
import logger from './utils/logger';
import cors from 'cors';

dotenv.config();

process.on('uncaughtException', logger.error);
process.on('unhandledRejection', logger.error);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', router());

app.listen(5000, (err: Error) => {
    if (err) {
        logger.error('error starting server', err);
        return;
    }
    logger.info('Server is running on port: 5000');
});
