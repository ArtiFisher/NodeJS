// eslint-disable-next-line no-unused-vars
import express, { NextFunction, Request, Response } from 'express';
import router from './api';
import * as HttpStatus from 'http-status-codes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router());

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        const errorDetails = {
            message: err
        };
        if (err.error && err.error.isJoi) {
            errorDetails.message = err.error.toString();
        }
        res.status(HttpStatus.BAD_REQUEST).json(errorDetails);
    }
    return next(err);
});

app.listen(5000, (err: Error) => {
    if (err) {
        console.log('error starting server', err);
        return;
    }
    console.log('Server is running on port: 5000');
});
