const express = require('express');
const router = express.Router();

const newController = require('../controller/newCheckController');
const fetchArticleText = require('../services/fetchArticleViaURL');

router.post('/check', newController.checkApi);

module.exports = router;
