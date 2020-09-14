// eslint-disable-next-line no-unused-vars
import { IGroup } from './IGroup';
import { database } from '../../config';
import dataMapper from '../dataMapper';

class Groups {
    add(body: IGroup) {
        return database('groups')
            .insert(body);
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
