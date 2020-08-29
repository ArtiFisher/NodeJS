import knex from 'knex';

const DB_URL = 'postgres://pbrqydwx:7EJDAau16x4krX1LCgHEoXvsufY8PWWV@kandula.db.elephantsql.com:5432/pbrqydwx';

export const database = knex({
    client: 'pg',
    connection: DB_URL
});
