var express = require('express');
const { route } = require('./tasks');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>HTML Data</p>');
  next();
});

router.get('/auth', function(req, res, next) {
  res.send('<p>Auth route</p>');
  next();
});

// router.get('/tasks', function(req, res, next) {
//   const json = JSON.stringify(route(), null, 4);
//   console.log(route(), json);
//   res.send('<p>tasks</p>'+json);
//   // next();
// });



module.exports = router;
