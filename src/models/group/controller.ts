// eslint-disable-next-line no-unused-vars
import { IGroup } from './IGroup';
import { logArgs, logErrors } from '../../utils/decorators';
import service from './service';

class GroupsController {
    @logArgs
    @logErrors
    async add(body: IGroup) {
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
    async change(id: string, body: IGroup) {
        return await service.change(id, body);
    }

    @logArgs
    @logErrors
    async delete(id: string) {
        return await service.delete(id);
    }

    @logArgs
    @logErrors
    async addUsers(groupId: number, usersArray: Array<number>) {
        return await service.addUsers(groupId, usersArray);
    }
}

export default new GroupsController();
