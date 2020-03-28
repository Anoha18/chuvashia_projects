const { Pool } = require('pg');
const connection = require('./connection');

const pool = new Pool(connection);

module.exports = pool;