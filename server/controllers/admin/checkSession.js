const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (!req.session || !req.session.user) {
    return res.json({ logout: true });
  }

  next();
};
