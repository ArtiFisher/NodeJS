import { Router } from 'express';
import user from './routes/user';
import group from './routes/group';
import requestLogger from './middlewares/requestLogger';
import errorLogger from './middlewares/errorLogger';

export default () => {
    const app = Router();
    app.use(requestLogger);
    app.use('/users', user);
    app.use('/groups', group);
    app.use(errorLogger);

    return app;
};
