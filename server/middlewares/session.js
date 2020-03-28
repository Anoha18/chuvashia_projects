const session = require('express-session');
const PostgreSqlStore = require('connect-pg-simple')(session);
const connection = require('../connection');

const sessionOptions = {
  secret: 'mYT0P$eCrEtIcK',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 365 * 24 * 60 * 60 * 1000,
  },
  store: new PostgreSqlStore({
    conObject: connection,
    tableName: 't_session'
  })
};

module.exports = (app) => {
  app.use(session(sessionOptions));
};
