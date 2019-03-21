var express = require('express');
var router = express.Router();

const data = require(`../data`);

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('data:', data);

  res.render('index', data);
});

module.exports = router;

/*var express = require('express');
var router = express.Router();

const data = require('../data');*/

/* GET home page.
router.get('/', function(req, res, next) {
  console.log('data:', data);
  res.render('index', data);
}); */

/* get a dynamic user via the route parameter
router.get('/:user', function(req, res, next) {
  console.log('user:', data[req.params.user]);
  res.render('userpage', data[req.params.user]);
}); */

//module.exports = router;
