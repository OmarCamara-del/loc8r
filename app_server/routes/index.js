var express = require('express');
var router = express.Router();
// var ctrMain = require('../controllers/main');

var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');


/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Others pages */
router.get('/about', ctrlOthers.about);

var homepageController = function (req, res, next) {
  res.render('index', { title: 'Express' });
};

/* GET home page. */
//router.get('/', homepageController);
//router.get('/', ctrMain.index);

module.exports = router;
