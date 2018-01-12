require('dotenv').config();
var bodyParser = require('body-parser');
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var flash = require('connect-flash');
// var isLoggedIn = require('./middleware/isLoggedIn');
// var passport = require('./config/passportConfig');
var session = require('express-session');
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(flash());

app.get("/", function(req, res){
	res.render("./site/home");
});



// app.use('/auth', require('./controllers/auth'));

app.listen(process.env.PORT || 3000);