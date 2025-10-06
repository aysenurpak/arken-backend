const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "arkendb",
    password: "9874",
    port: 5432,
});
module.exports = pool;