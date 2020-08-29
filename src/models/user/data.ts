import usersMock from './dataMock';
// eslint-disable-next-line no-unused-vars
import { IUser } from '../../interfaces/IUser';

class Users {
    data: Map<string, IUser>;

    constructor() {
        this.data = new Map(usersMock);
    }

    createUser(body: IUser) {
        this.data.set(body.id, body);
        return body.id;
    }

    getAll() {
        return Array.from(this.data.values());
    }

    getById(id: string) {
        return this.data.get(id);
    }

    find(substr, limit) {
        return this.getAll()
            .filter(({ login }) => login?.includes(substr))
            .slice(0, parseInt(limit, 10));
    }

    change(id, body) {
        this.data.set(id, { ...this.data.get(id), ...body });
        return true;
    }

    delete(id) {
        this.data.set(id, { ...this.data.get(id), isDeleted: true });
        return true;
    }
}

export default new Users();
