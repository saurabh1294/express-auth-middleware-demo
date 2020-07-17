var express = require('express');
var router = express.Router();
var keyStore = require('../key-store');




router.get('/auth', keyStore);
router.get('/tasks', keyStore);

router.get('/tasks/:id', keyStore);

router.get('/', keyStore);

module.exports = router;
