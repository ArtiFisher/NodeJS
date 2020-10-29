import { Router } from 'express';
import user from './routes/user';
import group from './routes/group';
import auth from './routes/auth';
import authValidator from './middlewares/authValidator';
import requestLogger from './middlewares/requestLogger';
import errorLogger from './middlewares/errorLogger';

export default () => {
    const app = Router();
    app.use(requestLogger);
    app.use('/auth', auth);
    app.use(authValidator);
    app.use('/users', user);
    app.use('/groups', group);
    app.use(errorLogger);

    return app;
};
