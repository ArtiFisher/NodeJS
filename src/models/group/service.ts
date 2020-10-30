// eslint-disable-next-line no-unused-vars
import { IGroup } from './IGroup';
import { database } from '../../config';
import dataMapper from '../dataMapper';

class Groups {
    add(body: IGroup) {
        return database('groups')
            .insert(body);
    }

    addUsers(group_id: number, userIds: Array<number>) {
        // transaction is used here, even though it's quite useless since it updates a single table in one query
        return database.transaction(async trx => trx('usergroup').insert(userIds.map(user_id => ({ group_id, user_id }))));
    }

    getAll() {
        return database('groups');
    }

    getById(id: string) {
        return database('groups')
            .where({ id });
    }

    change(id: string, body: IGroup) {
        return database('groups')
            .where({ id })
            .update(dataMapper(body));
    }

    delete(id: string) {
        return database('groups')
            .where({ id })
            .delete();
    }
}

export default new Groups();
