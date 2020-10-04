// eslint-disable-next-line no-unused-vars
import { IGroup } from './IGroup';
import { logArgs, logErrors } from '../../utils/decorators';
import data from './data';

class GroupsService {
    @logArgs
    @logErrors
    async add(body: IGroup) {
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
    async change(id: string, body: IGroup) {
        return await data.change(id, body);
    }

    @logArgs
    @logErrors
    async delete(id: string) {
        return await data.delete(id);
    }

    @logArgs
    @logErrors
    async addUsers(groupId: number, usersArray: Array<number>) {
        return await data.addUsers(groupId, usersArray);
    }
}

export default new GroupsService();
