import { Router } from 'express';
import user from './routes/user';
import group from './routes/group';

export default () => {
    const app = Router();
    app.use('/users', user);
    app.use('/groups', group);

    return app;
};
