const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');
const cardController = require('./controllers/cardController');



router.get('/', mainController.homePage);
router.get('/search', searchController.searchPage);
router.get('/carte/:id', cardController.cardPage);

module.exports = router;