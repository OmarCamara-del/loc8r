var express = require('express');
var router = express.Router();
var ctrMain = require('../controllers/main');


var homepageController = function (req, res, next) {
  res.render('index', { title: 'Express' });
};

/* GET home page. */
router.get('/', homepageController);
router.get('/', ctrMain.index);

module.exports = router;
