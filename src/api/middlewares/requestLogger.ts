// eslint-disable-next-line no-unused-vars
import { NextFunction, Request, Response } from 'express';
import logger from '../../utils/logger';

export default (req: Request, res: Response, next: NextFunction) => {
    const start = process.hrtime();
    res.on('finish', () => {
        const diff = process.hrtime(start);
        logger.info(`${req.method} ${req.originalUrl} with ${JSON.stringify(req.body)} took ${((diff[0] * 1e6 + diff[1]) / 1e6).toLocaleString()} ms`);
    });
    next();
};
