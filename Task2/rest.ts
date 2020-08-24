import express from 'express';
import userRouter from './userRouter';
import * as HttpStatus from 'http-status-codes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);

app.listen(5000, (err: any) => {
    if (err) {
        console.log('error starting server', err);
        return;
    }
    console.log('Server is running on port: 5000');
});

app.use((err, req, res, next) => {
    if (err && err.error && err.error.isJoi) {
        res.status(HttpStatus.BAD_REQUEST).json({
            type: err.type,
            message: err.error.toString()
        });
    } else {
        return next(err);
    }
});
