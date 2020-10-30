import controller from './controller';
import service from './service';

describe('Group Controller', () => {
    const mock = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('add', async () => {
        const testInput = {
            id: 'id',
            name: 'name',
            permissions: ['read']
        };
        service.add = mock;
        await controller.add(testInput);

        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith(testInput);
    });

    it('getAll', async () => {
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

    it('change', async () => {
        const testLogin = 'login';
        const testGroup = {
            id: 'id',
            name: 'name',
            permissions: ['read']
        };
        service.change = mock;
        await controller.change(testLogin, testGroup);

        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith(testLogin, testGroup);
    });

    it('delete', async () => {
        const testId = 'id';
        service.delete = mock;
        await controller.delete(testId);

        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith(testId);
    });

    it('addUsers', async () => {
        const testId = 'id';
        const testArray = [1, 2, 3];
        service.addUsers = mock;
        await controller.addUsers(testId, testArray);

        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith(testId, testArray);
    });
});
