// eslint-disable-next-line no-unused-vars
import { IUser } from './IUser';
import { logArgs, logErrors } from '../../utils/decorators';
import data from './data';

class UsersService {
    @logArgs
    @logErrors
    async add(body: IUser) {
        return await data.add(body);
    }

    @logArgs
    @logErrors
    async getAll() {
        return await data.getAll();
    }

    @logArgs
    @logErrors
    async getById(id: string) {
        return await data.getById(id);
    }

    @logArgs
    @logErrors
    async getByLogin(login: string) {
        return await data.getByLogin(login);
    }

    @logArgs
    @logErrors
    async change(id: string, body: IUser) {
        return await data.change(id, body);
    }

    @logArgs
    @logErrors
    async delete(id: string) {
        return await data.delete(id);
    }

    @logArgs
    @logErrors
    async find(id: string, limit: number) {
        return await data.find(id, limit);
    }
}

export default new UsersService();
