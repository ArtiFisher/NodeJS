// eslint-disable-next-line no-unused-vars
import { Router, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import asyncHandler from 'express-async-handler';
import user from '../../models/user';
import jwt from 'jsonwebtoken';
import { AUTH_EXPIRY_TIME } from '../../config';

const router = Router();

router
    .route('/')
    .post(asyncHandler(async (req: Request, res: Response) => {
        const employee = (await user.controller.getByLogin(req.body.login))[0];
        if (!employee || employee.password !== req.body.password) {
            res.status(HttpStatus.UNAUTHORIZED).send({ message: 'Wrong login or password' });
        } else {
            const token = jwt.sign({ id: employee.id },
                process.env.AUTH_TOKEN as string,
                { expiresIn: AUTH_EXPIRY_TIME });
            res.send(token);
        }
    }));

export default router;
