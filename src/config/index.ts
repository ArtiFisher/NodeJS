import knex from 'knex';

export const database = knex({
    client: 'pg',
    connection: `${process.env.DB_DIALECT}://${process.env.DB_API_KEY}:${process.env.DB_PORT}/${process.env.DB_PASSWORD}`
});
