// eslint-disable-next-line no-unused-vars
import { Router, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import asyncHandler from 'express-async-handler';
import { createValidator } from 'express-joi-validation';
import user from '../../models/user';
import loginValidator from '../middlewares/loginValidator';

const validator = createValidator();

const router = Router();

router
    .route('/')
    .post(
        validator.body(user.schema),
        loginValidator,
        asyncHandler(async (req, res) => {
            await user.controller.add(req.body);
            res.sendStatus(HttpStatus.CREATED);
        }))
    .get(asyncHandler(async (req: Request, res: Response) => {
        const result = await user.controller.getAll();
        res.json(result);
    }));

router
    .route('/:uid')
    .get(asyncHandler(async (req: Request, res: Response) => {
        const result = await user.controller.getById(req.params.uid);
        res.json(result);
    }))
    .patch(validator.body(user.schema),
        asyncHandler(async (req: Request, res: Response) => {
            await user.controller.change(req.params.uid, req.body);
            res.sendStatus(HttpStatus.ACCEPTED);
        }))
    .delete(asyncHandler(async (req: Request, res: Response) => {
        await user.controller.delete(req.params.uid);
        res.sendStatus(HttpStatus.ACCEPTED);
    }));

router
    .route('/autosuggest')
    .get(asyncHandler(async (req: Request, res: Response) => {
        const result = await user.controller.find(req.query.string as string, parseInt(req.query.limit as string, 10));
        res.json(result);
    }));

export default router;
