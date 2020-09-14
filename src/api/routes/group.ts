// eslint-disable-next-line no-unused-vars
import { Router, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import { createValidator } from 'express-joi-validation';
import group from '../../models/group';

const validator = createValidator();

const router = Router();

router.route('/')
    .post(validator.body(group.schema),
        async (req, res) => {
            await group.data.add(req.body);
            res.sendStatus(HttpStatus.CREATED);
        })
    .get(async (req: Request, res: Response) => {
        const result = await group.data.getAll();
        res.json(result);
    });

router.route('/:uid')
    .get(async (req: Request, res: Response) => {
        const result = await group.data.getById(req.params.uid);
        res.json(result);
    })
    .patch(validator.body(group.schema),
        async (req: Request, res: Response) => {
            await group.data.change(req.params.uid, req.body);
            res.sendStatus(HttpStatus.ACCEPTED);
        })
    .delete(async (req: Request, res: Response) => {
        await group.data.delete(req.params.uid);
        res.sendStatus(HttpStatus.ACCEPTED);
    });

router.route('/:uid/addUsers')
    .post(async (req: Request, res: Response) => {
        await group.data.addUsers(parseInt(req.params.uid, 10), req.body.users);
        res.sendStatus(HttpStatus.ACCEPTED);
    });

export default router;
