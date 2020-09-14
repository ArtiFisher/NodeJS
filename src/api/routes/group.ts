// eslint-disable-next-line no-unused-vars
import { Router, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import { createValidator } from 'express-joi-validation';
import group from '../../models/group';

const validator = createValidator();

const route = Router();

export default (app: Router) => {
    app.use('/group', route);

    route.post('/',
        validator.body(group.schema),
        async (req, res) => {
            await group.data.add(req.body);
            res.sendStatus(HttpStatus.CREATED);
        })
        .get('/', async (req: Request, res: Response) => {
            const result = await group.data.getAll();
            res.json(result);
        })
        .get('/:uid', async (req: Request, res: Response) => {
            const result = await group.data.getById(req.params.uid);
            res.json(result);
        })
        .patch('/:uid',
            validator.body(group.schema),
            async (req: Request, res: Response) => {
                await group.data.change(req.params.uid, req.body);
                res.sendStatus(HttpStatus.ACCEPTED);
            })
        .delete('/:uid', async (req: Request, res: Response) => {
            await group.data.delete(req.params.uid);
            res.sendStatus(HttpStatus.ACCEPTED);
        });
};
