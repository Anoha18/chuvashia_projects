const main = require('../routes/main');
const admin = require('../routes/admin')
const parsers = require('./parsers');
const session = require('./session');

module.exports = (app) => {
  parsers(app);
  session(app);

  // api основных данных
  app.use('/api', main);
  // api с доступом
  app.use('/api/admin', admin);
};
