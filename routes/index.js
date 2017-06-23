var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  db('protoss_units').then(data => {
    let databaseAll = JSON.stringify(data)

    res.render('index', {data: databaseAll} );
  })
});

router.get('/data', function(req, res, next) {
  db('protoss_units').then(data => {
    res.send(data);
  })
});

module.exports = router;
