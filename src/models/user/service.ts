// eslint-disable-next-line no-unused-vars
import { IUser } from './IUser';
import { database } from '../../config';
import dataMapper from '../dataMapper';

class Users {
    add(body: IUser) {
        return database('users').insert(dataMapper(body));
    }

    getAll() {
        return database('users');
    }

    getByLogin(login: string) {
        return database('users')
            .where({ login });
    }

    getById(id: string) {
        return database('users')
            .where({ id });
    }

    find(substr: string, limit: number) {
        return database('users')
            .whereRaw(`POSITION('${substr}' in login) > 0`)
            .limit(limit);
    }

    change(id: string, body: IUser) {
        return database('users')
            .where({ id })
            .update(dataMapper(body));
    }

    delete(id: string) {
        return database('users')
            .where({ id })
            .update({ isdeleted: true });
    }
}

export default new Users();
