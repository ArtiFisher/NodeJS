// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import user from '../../models/user';

export default (req: Request, res: Response, next: Function) => {
    user.service.getByLogin(req.body.login).then(result => {
        // login must not already exist
        if (result.length > 0) {
            res.status(HttpStatus.BAD_REQUEST).json('User with this login already exists.');
        } else {
            return next();
        }
    }
    );
};
