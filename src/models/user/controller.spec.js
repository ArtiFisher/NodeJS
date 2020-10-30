import controller from './controller';
import service from './service';

describe('User Controller', () => {
    const mock = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('add', async () => {
        const testInput = {
            id: 'id',
            login: 'login',
            password: 'pwd',
            age: 10,
            isDeleted: true
        };
        service.add = mock;
        await controller.add(testInput);

        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith(testInput);
    });

    it('getAllUsers', async () => {
        service.getAll = mock;
        await controller.getAll();

        expect(mock).toBeCalledTimes(1);
    });

    it('getById', async () => {
        const testInput = 'id';
        service.getById = mock;
        await controller.getById(testInput);

        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith(testInput);
    });

    it('getByLogin', async () => {
        const testInput = 'login';
        service.getByLogin = mock;
        await controller.getByLogin(testInput);

        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith(testInput);
    });

    it('change', async () => {
        const testId = 'id';
        const testUser = {
            id: 'id',
            login: 'login',
            password: 'pwd',
            age: 10,
            isDeleted: true
        };
        service.change = mock;
        await controller.change(testId, testUser);

        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith(testId, testUser);
    });

    it('delete', async () => {
        const testInput = 'id';
        service.delete = mock;
        await controller.delete(testInput);

        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith(testInput);
    });

    it('find', async () => {
        const testId = 'id';
        const testLimit = 3;
        service.find = mock;
        await controller.find(testId, testLimit);

        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith(testId, testLimit);
    });
});
