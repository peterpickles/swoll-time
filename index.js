require('dotenv').config();
var bodyParser = require('body-parser');
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var flash = require('connect-flash');
var isLoggedIn = require('./middleware/loggedin');
var passport = require('./config/passportConfig');
var session = require('express-session');
var db = require("./models")
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public/'));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.alerts = req.flash();
  next();
});

app.get('/', function(req,res) {
  // res.send('homepage coming soon!')
  res.render('./site/home');
});

app.get('/profile', isLoggedIn, function(req,res) {
  console.log(req.body);
  db.workout.findAll({
    where: {userId:req.user.id}
  }).then(function(workout){
    res.render('site/profile.ejs', {workouts: workout});
  }).catch(function(err){
    res.send(404, err);
  });
});

app.get('/about', isLoggedIn, function(req,res) {
  res.render('site/about');
});

app.get('/schedule', isLoggedIn, function(req,res) {
  res.render('workouts/schedule');
});

app.get('/search', isLoggedIn, function(req, res) {
  res.send("workouts/search");
});

app.post('/schedule', isLoggedIn, function(req,res) {
  db.workout.create ({
    name: req.body.exercise,
    nextnotice: req.body.date + " " + req.body.time,
    userId: req.user.id
  }).then(function(workout) {
    res.redirect ("/profile");
  }).catch(function(err) {
    console.log("database error", err);
  });
});

app.use('/auth', require('./controllers/auth'));

var server = app.listen(process.env.PORT || 3000);

module.export = server;
