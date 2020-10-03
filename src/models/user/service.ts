// eslint-disable-next-line no-unused-vars
import { IUser } from './IUser';
import data from './data';

class UsersService {
    async add(body: IUser) {
        return await data.add(body);
    }

    async getAll() {
        return await data.getAll();
    }

    async getById(id: string) {
        return await data.getById(id);
    }

    async change(id: string, body: IUser) {
        return await data.change(id, body);
    }

    async delete(id: string) {
        return await data.delete(id);
    }

    async find(id: string, limit: number) {
        return await data.find(id, limit);
    }
}

export default new UsersService();
