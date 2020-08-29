// eslint-disable-next-line no-unused-vars
import { Router, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import { createValidator } from 'express-joi-validation';
import user from '../../entities/user';

const validator = createValidator();

const route = Router();

export default (app: Router) => {
    app.use('/user', route);

    route.post('/',
        validator.body(user.schema),
        user.loginValidator,
        (req, res) => {
            user.data.set(req.body.id, req.body);
            res.sendStatus(HttpStatus.CREATED);
        });

    route.get('/', (req: Request, res: Response) => res.json(Array.from(user.data.values())));

    route.get('/autosuggest', (req: Request, res: Response) =>
        res.json(Array.from(user.data.values())
            .filter(({ login }) => login?.includes(req.query.substr as string))
            .slice(0, parseInt(req.query.limit as string, 10)))
    );

    route.get('/:uid', (req: Request, res: Response) => res.json(user.data.get(req.params.uid)));

    route.patch('/:uid',
        validator.body(user.schema),
        (req: Request, res: Response) => {
            user.data.set(req.params.uid, { ...user.data.get(req.params.uid), ...req.body });
            res.sendStatus(HttpStatus.ACCEPTED);
        });

    route.delete('/:uid', (req: Request, res: Response) => {
        user.data.set(req.params.uid, { ...user.data.get(req.params.uid), isDeleted: true });
        res.sendStatus(HttpStatus.ACCEPTED);
    });
};
