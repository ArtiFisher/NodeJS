import { Router } from 'express';
import user from './routes/user';

export default () => {
    const app = Router();
    app.use('/users', user);

    return app;
};
