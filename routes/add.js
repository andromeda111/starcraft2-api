var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('add');
});

module.exports = router;
