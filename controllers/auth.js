var express = require ("express");
var passport = require("../config/passportConfig");
var db = require("../models");
var router = express.Router();

router.get("/login", function(req, res){
	res.render("auth/login");
}); 

router.post("login", passport.authenticate("local" {
	successRedirect: "/profile",
	successFlash: "Login Successful!",
	failureRedirect: "/auth/login",
	failureFlash: "Invalid Credentials"
}));

router.get("/signup", function(req, res){
	res.render("auth/signup");
});

router.post("/signup", function(req, res, next){
	console.log("req.body is", req.body);
	db.user.findOrCreate({
		where: { email: req.body.email },
		defaults: {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			password: req.body.password
		}
	}).spread(function(user, wasCreated){
		if(wasCreated){
			passport.authenticate("local", {
				successRedirect: "profile",
				successFlash: "Successfully logged in"
			})(req, res, next)
		}
		else {
			//bad job, you tried to sign up when you should login
			req.flsh("error", "Email already exists");
			res.redirect("/auth/login");
		}
	}).catch(function(err){
		req.flash("error", err.message)
	})
})