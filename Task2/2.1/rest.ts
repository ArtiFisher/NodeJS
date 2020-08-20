import express from 'express';
import * as HttpStatus from 'http-status-codes';

type User = {
    id: string;
    login: string;
    password: string;
    age: number;
    isDeleted: boolean;
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users: Map<string, User> = new Map();

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    console.log(Array.from(users.values()));
    res.json(Array.from(users.values()));
});

userRouter.post('/', (req, res) => {
    users.set(req.body.id, req.body);
    res.sendStatus(HttpStatus.CREATED);
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

app.use('/user', userRouter);

app.listen(5000, (err: any) => {
    if (err) {
        console.log('error starting server', err);
        return;
    }
    console.log('Server is running on port: 5000');
});
