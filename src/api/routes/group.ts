// eslint-disable-next-line no-unused-vars
import { Router, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import asyncHandler from 'express-async-handler';
import { createValidator } from 'express-joi-validation';
import group from '../../models/group';

const validator = createValidator();

const router = Router();

router.route('/')
    .post(validator.body(group.schema),
        asyncHandler(async (req, res) => {
            await group.controller.add(req.body);
            res.sendStatus(HttpStatus.CREATED);
        }))
    .get(asyncHandler(async (req: Request, res: Response) => {
        const result = await group.controller.getAll();
        res.json(result);
    }));

router.route('/:uid')
    .get(asyncHandler(async (req: Request, res: Response) => {
        const result = await group.controller.getById(req.params.uid);
        res.json(result);
    }))
    .patch(validator.body(group.schema),
        asyncHandler(async (req: Request, res: Response) => {
            await group.controller.change(req.params.uid, req.body);
            res.sendStatus(HttpStatus.ACCEPTED);
        }))
    .delete(asyncHandler(async (req: Request, res: Response) => {
        await group.controller.delete(req.params.uid);
        res.sendStatus(HttpStatus.ACCEPTED);
    }));

router.route('/:uid/addUsers')
    .post(asyncHandler(async (req: Request, res: Response) => {
        await group.controller.addUsers(parseInt(req.params.uid, 10), req.body.users);
        res.sendStatus(HttpStatus.ACCEPTED);
    }));

export default router;
