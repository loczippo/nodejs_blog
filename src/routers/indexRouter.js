
const express = require('express');
const router = express.Router();

const indexControllers = require('../app/controllers/IndexController');

router.use('/search',indexControllers.search);
router.use('/',indexControllers.index);

module.exports = router;