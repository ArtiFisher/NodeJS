import * as HttpStatus from 'http-status-codes';

export default dataArray => (req, res, next) => {
    const allLogins = dataArray.map(({ login }) => login);
    // login must not already exist in provided dataArray
    if (allLogins.includes(req.body.login)) {
        res.status(HttpStatus.BAD_REQUEST).json('User with this login already exists.');
    } else {
        return next();
    }
};
