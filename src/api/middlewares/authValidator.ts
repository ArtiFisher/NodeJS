// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

export default (req: Request, res: Response, next: Function) => {
    const token = req.headers['x-access-token'] as string;
    console.log(token);
    if (!token) {
        res.sendStatus(HttpStatus.UNAUTHORIZED);
    } else {
        jwt.verify(token, process.env.AUTH_TOKEN as string, err => err ? res.sendStatus(HttpStatus.FORBIDDEN) : next());
    }
};
