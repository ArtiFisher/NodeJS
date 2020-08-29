import usersMock from './dataMock';

type User = {
    id: string;
    login: string;
    password: string;
    age: number;
    isDeleted: boolean;
};

const users: Map<string, User> = new Map(usersMock);

export default users;
