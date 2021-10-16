
//include all required modules
var express = require('express');
var userRoutes = express.Router();
var formidable = require("formidable");

//load option settomgs
var loginOptions = require('../options/loginOptions');
var profileOptions = require('../options/profileOptions');

//load models
var userModel = require('../models/Users');
var modelProduct = require('../models/Products');

/**
 * Route serving homepage
 * if the user is logged in, the layout view is rendered
 * if not the login form is displayed
 * */
userRoutes.route("/")
    .get(function (req, res) {
        
        //check if user is already signed in
        if (req.session.user) {
            
            //if signed in, display success message
            profileOptions.poraka("Успешно се логиравте во вашиот профил!");
            //redirect to products dashboard
            res.redirect('/products/1');
        } else {
            
            //if not logged in, render the login view
            res.render("login", loginOptions.read());
            loginOptions.poraka("");
        }
    })
    .post(function (req, res) {
        var form = new formidable.IncomingForm();

        form.parse(req, function (err, fields, files) {
            if (err) throw err;

            var myCallback = function (err, data) {
                if (err) throw err; // Check for the error and throw if it exists.
                
                //if user data is found in the database
                if (data) {
                    //add data to the session
                    req.session.user = data;
                    //redirect to homepage
                    res.redirect('/');
                } else {
                    //user was not found, display message and redirect to homepage
                    loginOptions.poraka("Грешни кориснички информации!");
                    res.redirect('/');
                }
            };

            //check if stay signed in is checked and add expiration to session
            if (fields['najava'] == undefined) {
                req.sessionOptions.maxAge = 15 * 60 * 1000; //same as 15 min
            } else {
                req.sessionOptions.maxAge = 24 * 60 * 60 * 1000; //same as 1 day
            }
            userModel.findUser(fields, myCallback);
        });
    });


/**
 * Route serving the signup page
 * */
userRoutes.route('/signup')
    .get(function (req, res, next) {
        if (req.session.user) {
            //if user is already signed in, redirect to homepage
            res.redirect('/');
        } else {
            //else render the signup view
            res.render("signup", {
                title: "Направи Профил"
                , description: "Креирајте свој профил за да може да ги користите сите функционалности."
                , message: ""
            });
        }
    })
    .post(function (req, res) {
        //get data from the sign up form
        var form = new formidable.IncomingForm();
        
        //parse the data from the sign up form
        form.parse(req, function (err, fields, files) {
            if (err) throw err;
            
            //callback function, check if username is already in the database
            var callback = function (err, username) {
                if (err) throw err;
                
                //callback function if the user is added to the database
                var myCallback = function (err, data) {
                    if (err) console.log('Error on signup page'); // Check for the error and throw if it exists.
                    
                    //if the data was succesfully added to the database, display success message and redirect to homepage
                    if (data) {
                        loginOptions.poraka("Успешно креиран профил!");
                        res.redirect('/');
                    }
                };

                //if username is found in the database, display error message and render the signup form again
                if (username) {
                    res.render("signup", {
                        title: "SignUp"
                        , description: "Sign up Page description"
                        , message: "Веќе постои тоа корисничко име."
                    });
                } else {
                    
                    //if username is not found, insert the form data to the database
                    userModel.signUpUser(fields, myCallback);
                }
            };
            userModel.findUsername(fields, callback);
        });
    });

/**
 * Route used to log out the user from the application
 * */
userRoutes.route('/logout')
    .get(function (req, res) {
        if (req.session.user) {
            //destroy the session data, display success message and redirect to homepage
            delete req.session.user;
            loginOptions.poraka("Успешно сте одјавен!");
            res.redirect('/');
        } else {
            res.charset = 'utf-8';
            res.end('<p>You dont have permission to access this page!</p><a href="/">BACK</a>');
        }
    });

/**
 * Route used to delete a user from the database
 * including all products added from his account
 * */
userRoutes.route('/remove/user')
    .get(function (req, res) {
        
        //first check that the user is signed in into his profile
        if (req.session.user) {
            
            //callback function when the user is deleted from the database
            var newCallback = function (err, data) {
                if (err) throw err;
                
                //if operation was a success, delete the session data, display success message and redirect to homepage
                if (data == 1) {
                    delete req.session.user;
                    loginOptions.poraka("Профилот е успешно избришан");
                    res.redirect('/');
                }

            };
            
            //delete all the product data from the user profile
            modelProduct.deleteAll(req.session.user);
            //next delete the user from the database
            userModel.delete(req.session.user, newCallback);
        } else {
            //if the user is not logged in, display that the session expired and redirect to homepage.
            loginOptions.poraka("Сесијата истече, логирајте се повторно.");
            res.redirect('/');
        }
    });


//export all routes to be used in other modules
module.exports = userRoutes;