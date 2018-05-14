require('dotenv').config();
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/loggedIn');
var yelp = require('yelp-fusion');
var client = yelp.client(process.env.API_KEY);

function yelpSearch(searchTerm, location, callback){
    client.search({
      term: searchTerm,
      location: location
    }).then(response => {
      response.jsonBody.businesses.forEach(function(item){
  
      });
      callback(response.jsonBody.businesses);
    }).catch(e => {
      console.log(e);
    });
  }

router.get('/schedule', function(req, res) {
    console.log('find rest route reach');
    res.render('event/schedule', {businesses: [null]});
  });

//This will post the yelp results to 
router.post('/search', function(req, res) {
    console.log(req.body);
    yelpSearch(req.body.gym, 'Tacoma', function(businesses){
      res.render('workouts/search', {businesses: businesses});
    });
});

//delete route to get workouts off profile page
router.delete('/:id', function(req, res) {
      db.workout.destroy({
        where:{
          id: req.params.id}
        }).then(function(deleted) {
          console.log('deleted = ', deleted);
          res.send('all good');
    }).catch(function(err) {
          console.log('error happend', err);
          res.send('failed', err);
    });
});

module.exports = router;