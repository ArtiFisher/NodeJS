// eslint-disable-next-line no-unused-vars
import { NextFunction, Request, Response } from 'express';
import logger from '../../utils/logger';
import * as HttpStatus from 'http-status-codes';

export default (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        const errorMessage = `Request failed. Error: ${err}`;
        logger.error(errorMessage);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(errorMessage);
    }
    return next(err);
};
