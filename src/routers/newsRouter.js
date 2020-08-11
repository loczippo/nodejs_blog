const express = require('express');
const router = express.Router();

const newsControllers = require('../app/controllers/NewsController');

router.use('/page1', newsControllers.show);
router.use('/', newsControllers.index);

module.exports = router;
