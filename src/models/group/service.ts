// eslint-disable-next-line no-unused-vars
import { IGroup } from './IGroup';
import data from './data';

class GroupsService {
    async add(body: IGroup) {
        return await data.add(body);
    }

    async getAll() {
        return await data.getAll();
    }

    async getById(id: string) {
        return await data.getById(id);
    }

    async change(id: string, body: IGroup) {
        return await data.change(id, body);
    }

    async delete(id: string) {
        return await data.delete(id);
    }

    async addUsers(groupId: number, usersArray: Array<number>) {
        return await data.addUsers(groupId, usersArray);
    }
}

export default new GroupsService();
