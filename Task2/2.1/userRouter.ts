import express from 'express';
import * as HttpStatus from 'http-status-codes';
import users from './users';

const userRouter = express.Router();

userRouter.post('/', (req, res) => {
    users.set(req.body.id, req.body);
    res.sendStatus(HttpStatus.CREATED);
});

userRouter.get('/', (req, res) => {
    res.json(Array.from(users.values()));
});

userRouter.get('/autosuggest', (req, res) => {
    res.json(Array.from(users.values())
        .filter(({ login }) => login?.includes(req.query.substr as string))
        .slice(0, parseInt(req.query.limit as string, 10)));
});

userRouter.get('/:uid', (req, res) => {
    res.json(users.get(req.params.uid));
});

userRouter.patch('/:uid', (req, res) => {
    users.set(req.params.uid, { ...users.get(req.params.uid), ...req.body });
    res.sendStatus(HttpStatus.ACCEPTED);
});

userRouter.delete('/:uid', (req, res) => {
    users.set(req.params.uid, { ...users.get(req.params.uid), isDeleted: true });
    res.sendStatus(HttpStatus.ACCEPTED);
});

export default userRouter;
