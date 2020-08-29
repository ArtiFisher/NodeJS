import * as HttpStatus from 'http-status-codes';
import users from './data';

export default (req, res, next) => {
    const allLogins = Array.from(users.values()).map(({ login }) => login);
    // login must not already exist in users collection
    if (allLogins.includes(req.body.login)) {
        res.status(HttpStatus.BAD_REQUEST).json('User with this login already exists.');
    } else {
        return next();
    }
};
