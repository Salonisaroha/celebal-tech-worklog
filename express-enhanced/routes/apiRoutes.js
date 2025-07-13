const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/random-user', apiController.fetchExternalData);

module.exports = router;
