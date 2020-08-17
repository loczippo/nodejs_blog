const express = require('express');
const router = express.Router();

const indexControllers = require('../app/controllers/IndexController');
router.get('/search', indexControllers.search);
router.get('/', indexControllers.index);

module.exports = router;
