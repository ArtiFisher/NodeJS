import controller from './controller';
import service from './service';

describe('User Controller', () => {
    const mock = jest.fn();
    const testError = new Error('test');
    const errorMock = jest.fn(() => {
        throw testError;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('add', () => {
        const testInput = {
            id: 'id',
            login: 'login',
            password: 'pwd',
            age: 10,
            isDeleted: true
        };
        it('should correctly process valid input', async () => {
            service.add = mock;
            await controller.add(testInput);

            expect(mock).toBeCalledTimes(1);
            expect(mock).toBeCalledWith(testInput);
        });
        it('should correctly process error', async () => {
            service.add = errorMock;

            expect(controller.add(testInput)).rejects.toEqual(testError);
        });
    });
    describe('getAllUsers', () => {
        it('should correctly process valid input', async () => {
            service.getAll = mock;
            await controller.getAll();

            expect(mock).toBeCalledTimes(1);
        });
        it('should correctly process error', async () => {
            service.getAll = errorMock;

            expect(controller.getAll()).rejects.toEqual(testError);
        });
    });
    describe('getById', () => {
        const testInput = 'id';
        it('should correctly process valid input', async () => {
            service.getById = mock;
            await controller.getById(testInput);

            expect(mock).toBeCalledTimes(1);
            expect(mock).toBeCalledWith(testInput);
        });
        it('should correctly process error', async () => {
            service.getById = errorMock;

            expect(controller.getById(testInput)).rejects.toEqual(testError);
        });
    });
    describe('getByLogin', () => {
        const testInput = 'login';
        it('should correctly process valid input', async () => {
            service.getByLogin = mock;
            await controller.getByLogin(testInput);

            expect(mock).toBeCalledTimes(1);
            expect(mock).toBeCalledWith(testInput);
        });
        it('should correctly process error', async () => {
            service.getByLogin = errorMock;

            expect(controller.getByLogin(testInput)).rejects.toEqual(testError);
        });
    });
    describe('change', () => {
        const testId = 'id';
        const testUser = {
            id: 'id',
            login: 'login',
            password: 'pwd',
            age: 10,
            isDeleted: true
        };
        it('should correctly process valid input', async () => {
            service.change = mock;
            await controller.change(testId, testUser);

            expect(mock).toBeCalledTimes(1);
            expect(mock).toBeCalledWith(testId, testUser);
        });
        it('should correctly process error', async () => {
            service.change = errorMock;

            expect(controller.change(testId, testUser)).rejects.toEqual(testError);
        });
    });
    describe('delete', () => {
        const testInput = 'id';
        it('should correctly process valid input', async () => {
            service.delete = mock;
            await controller.delete(testInput);

            expect(mock).toBeCalledTimes(1);
            expect(mock).toBeCalledWith(testInput);
        });
        it('should correctly process error', async () => {
            service.delete = mock;

            expect(controller.delete(testInput)).rejects.toEqual(testError);
        });
    });
    describe('find', () => {
        const testId = 'id';
        const testLimit = 3;
        it('should correctly process valid input', async () => {
            service.find = mock;
            await controller.find(testId, testLimit);

            expect(mock).toBeCalledTimes(1);
            expect(mock).toBeCalledWith(testId, testLimit);
        });
        it('should correctly process error', async () => {
            service.find = errorMock;

            expect(controller.find(testId, testLimit)).rejects.toEqual(testError);
        });
    });
});
