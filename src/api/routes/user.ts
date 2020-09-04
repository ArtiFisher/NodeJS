// eslint-disable-next-line no-unused-vars
import { Router, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import { createValidator } from 'express-joi-validation';
import user from '../../models/user';
import loginValidator from '../middlewares/loginValidator';

const validator = createValidator();

const route = Router();

export default (app: Router) => {
    app.use('/user', route);

    route.post('/',
        validator.body(user.schema),
        loginValidator,
        async (req, res) => {
            await user.data.add(req.body);
            res.sendStatus(HttpStatus.CREATED);
        });

    route.get('/', async (req: Request, res: Response) => {
        const result = await user.data.getAll();
        console.log(result);
        res.json(result);
    });

    route.get('/autosuggest', async (req: Request, res: Response) => {
        const result = await user.data.find(req.query.string as string, parseInt(req.query.limit as string, 10));
        res.json(result);
    });

    route.get('/:uid', async (req: Request, res: Response) => {
        const result = await user.data.getById(req.params.uid);
        res.json(result);
    });

    route.patch('/:uid',
        validator.body(user.schema),
        async (req: Request, res: Response) => {
            await user.data.change(req.params.uid, req.body);
            res.sendStatus(HttpStatus.ACCEPTED);
        });

    route.delete('/:uid', async (req: Request, res: Response) => {
        await user.data.delete(req.params.uid);
        res.sendStatus(HttpStatus.ACCEPTED);
    });
};