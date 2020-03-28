const main = require('../routes/main');
const api = require('../routes/api')
const parsers = require('./parsers');
const session = require('./session');

module.exports = (app) => {
  parsers(app);
  // session(app);

  // api основных данных
  app.use('/', main);
  // api с доступом
  app.use('/api', api);
};
