// eslint-disable-next-line no-unused-vars
import { IUser } from './IUser';
import { logArgs, logErrors } from '../../utils/decorators';
import service from './service';

class UsersController {
    @logArgs
    @logErrors
    async add(body: IUser) {
        return await service.add(body);
    }

    @logArgs
    @logErrors
    async getAll() {
        return await service.getAll();
    }

    @logArgs
    @logErrors
    async getById(id: string) {
        return await service.getById(id);
    }

    @logArgs
    @logErrors
    async getByLogin(login: string) {
        return await service.getByLogin(login);
    }

    @logArgs
    @logErrors
    async change(id: string, body: IUser) {
        return await service.change(id, body);
    }

    @logArgs
    @logErrors
    async delete(id: string) {
        return await service.delete(id);
    }

    @logArgs
    @logErrors
    async find(id: string, limit: number) {
        return await service.find(id, limit);
    }
}

export default new UsersController();
