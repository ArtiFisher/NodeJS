
import controller from './controller';
import service from './service';
// eslint-disable-next-line no-unused-vars
import { IGroup } from './IGroup';

describe('Group Controller', () => {
    const mock = jest.fn();
    const testError = new Error('test');
    const errorMock = jest.fn(() => {
        throw testError;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    describe('add', () => {
        const testInput: IGroup = {
            id: 'id',
            name: 'name',
            permissions: ['READ']
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
    describe('getAll', () => {
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
    describe('change', () => {
        const testLogin = 'login';
        const testGroup: IGroup = {
            id: 'id',
            name: 'name',
            permissions: ['READ']
        };
        it('should correctly process valid input', async () => {
            service.change = mock;
            await controller.change(testLogin, testGroup);

            expect(mock).toBeCalledTimes(1);
            expect(mock).toBeCalledWith(testLogin, testGroup);
        });
        it('should correctly process error', async () => {
            service.change = errorMock;

            expect(controller.change(testLogin, testGroup)).rejects.toEqual(testError);
        });
    });
    describe('delete', () => {
        const testId = 'id';
        it('should correctly process valid input', async () => {
            service.delete = mock;
            await controller.delete(testId);

            expect(mock).toBeCalledTimes(1);
            expect(mock).toBeCalledWith(testId);
        });
        it('should correctly process error', async () => {
            service.delete = errorMock;

            expect(controller.delete(testId)).rejects.toEqual(testError);
        });
    });
    describe('addUsers', () => {
        const testId = 1;
        const testArray = [1, 2, 3];
        it('should correctly process valid input', async () => {
            service.addUsers = mock;
            await controller.addUsers(testId, testArray);

            expect(mock).toBeCalledTimes(1);
            expect(mock).toBeCalledWith(testId, testArray);
        });
        it('should correctly process error', async () => {
            service.addUsers = errorMock;

            expect(controller.addUsers(testId, testArray)).rejects.toEqual(testError);
        });
    });
});
