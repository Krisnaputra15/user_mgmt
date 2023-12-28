require('dotenv').config()

module.exports = {
    client: 'mysql2',
    connection: {
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: '../database/migrations'
    }
};