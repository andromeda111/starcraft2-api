var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {

  let getTerran = function() {
    return db('terran_units').then(terran => {
      return terran
    })
  }
  let getZerg = function() {
    return db('zerg_units').then(zerg => {
      return zerg
    })
  }
  let getProtoss = function() {
    return db('protoss_units').then(protoss => {
      return protoss
    })
  }

  Promise.all([getTerran(), getZerg(), getProtoss()]).then(data => {
    console.log(data);
    let databaseAll = data
    // res.json(data)
    res.render('index', { data: databaseAll });
  });
});

// Get All Race Data
router.get('/data', function(req, res, next) {

  let getTerran = function() {
    return db('terran_units').then(terran => {
      return terran
    })
  }
  let getZerg = function() {
    return db('zerg_units').then(zerg => {
      return zerg
    })
  }
  let getProtoss = function() {
    return db('protoss_units').then(protoss => {
      return protoss
    })
  }

  Promise.all([getTerran(), getZerg(), getProtoss()]).then(data => {
    let units = {
      terran: data[0],
      zerg: data[1],
      protoss: data[2]
    }
    res.send(units);
  });
});

// Terran
router.get('/data/terran/units', function(req, res, next) {
  db('terran_units').then(data => {
    res.send(data);
  })
});

router.get('/data/terran/units/:id', function(req, res, next) {
  var id = req.params.id
  db('terran_units').where({id}).then(data => {
    res.send(data);
  })
});

// Zerg
router.get('/data/zerg/units', function(req, res, next) {
  db('zerg_units').then(data => {
    res.send(data);
  })
});

router.get('/data/zerg/units/:id', function(req, res, next) {
  var id = req.params.id
  db('zerg_units').where({id}).then(data => {
    res.send(data);
  })
});

// Protoss
router.get('/data/protoss/units', function(req, res, next) {
  db('protoss_units').then(data => {
    res.send(data);
  })
});

router.get('/data/protoss/units/:id', function(req, res, next) {
  var id = req.params.id
  db('protoss_units').where({id}).then(data => {
    res.send(data);
  })
});

module.exports = router;
