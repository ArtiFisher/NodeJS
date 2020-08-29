// eslint-disable-next-line no-unused-vars
import { Router, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import { createValidator } from 'express-joi-validation';
import user from '../../models/user';
import loginValidator from '../middlewares/loginValidator';
import users from '../../models/user/data';

const validator = createValidator();

const route = Router();

export default (app: Router) => {
    app.use('/user', route);

    route.post('/',
        validator.body(user.schema),
        loginValidator(users.getAll()),
        (req, res) => {
            users.createUser(req.body);
            res.sendStatus(HttpStatus.CREATED);
        });

    route.get('/', (req: Request, res: Response) => res.json(users.getAll()));

    route.get('/autosuggest', (req: Request, res: Response) => res.json(users.find(req.query.substr, req.query.limit)));

    route.get('/:uid', (req: Request, res: Response) => res.json(users.getById(req.params.uid)));

    route.patch('/:uid',
        validator.body(user.schema),
        (req: Request, res: Response) => {
            users.change(req.params.uid, req.body);
            res.sendStatus(HttpStatus.ACCEPTED);
        });

    route.delete('/:uid', (req: Request, res: Response) => {
        users.delete(req.params.uid);
        res.sendStatus(HttpStatus.ACCEPTED);
    });
};
