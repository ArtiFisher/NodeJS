import express from 'express';
import * as HttpStatus from 'http-status-codes';
import users from './users';
import { createValidator } from 'express-joi-validation';
import userSchema from './userSchema';

const userRouter = express.Router();
const validator = createValidator();

const loginValidator =  (req, res, next) => {
    const allLogins = Array.from(users.values()).map(({ login }) => login);
    // login must not already exist in users collection
    if (allLogins.includes(req.body.login)) {
        res.status(HttpStatus.BAD_REQUEST).json('User with this login already exists.');
    } else {
        return next();
    }
};

userRouter.post('/',
    validator.body(userSchema),
    loginValidator,
    (req, res) => {
        console.log(req.params, req.body);
        users.set(req.body.id, req.body);
        res.sendStatus(HttpStatus.CREATED);
    });

userRouter.get('/', (req, res) => res.json(Array.from(users.values())));

userRouter.get('/autosuggest', (req, res) =>
    res.json(Array.from(users.values())
        .filter(({ login }) => login?.includes(req.query.substr as string))
        .slice(0, parseInt(req.query.limit as string, 10)))
);

userRouter.get('/:uid', (req, res) => res.json(users.get(req.params.uid)));

userRouter.patch('/:uid',
    validator.body(userSchema),
    (req, res) => {
        users.set(req.params.uid, { ...users.get(req.params.uid), ...req.body });
        res.sendStatus(HttpStatus.ACCEPTED);
    });

userRouter.delete('/:uid', (req, res) => {
    users.set(req.params.uid, { ...users.get(req.params.uid), isDeleted: true });
    res.sendStatus(HttpStatus.ACCEPTED);
});

export default userRouter;
