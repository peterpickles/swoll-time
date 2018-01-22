require('dotenv').config();
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');
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

router.post('/active', function(req, res) {
    console.log(req.body);
    yelpSearch(req.body.course, 'Seattle', function(businesses){
      res.render('event/active', {businesses: businesses});
    });
  });

//delete route to get events off profile page
router.delete('/:id', function(req, res) {
    console.log('delete Route ID = ', req.params.id);
    db.schedule.findOne({
      where: {id: req.params.id}
    }).then(function(schedule){
      db.schedule.destroy({
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
    });

module.exports = router;