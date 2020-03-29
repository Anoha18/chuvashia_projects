const router = require('express').Router();
const getNews = require('../controllers/main/getNews');

router.post('/getNews', getNews);

module.exports = router;
