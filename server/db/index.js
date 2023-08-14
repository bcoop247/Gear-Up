const pgp = require("pg-promise")(/*options*/);

const dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'retail_store',
  user: 'brandoncooper',
  password: 'pass'
};

const db = pgp(dbConfig);

module.exports = db;