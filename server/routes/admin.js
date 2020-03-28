const router = require('express').Router();
const auth = require('../controllers/admin/auth');
const getUser = require('../controllers/admin/getUser');
const checkSession = require('../controllers/admin/checkSession');
const logout = require('../controllers/admin/logout');

router.post('/auth', auth);

router.use('/', checkSession);

router.post('/getUser', getUser);

router.post('/logout', logout);

module.exports = router;
