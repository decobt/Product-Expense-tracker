//include all required modules
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');

//define the user schema for the model
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    username: String,
    password: String,
});

//define the userModel based on the schema
var userModel = mongoose.model('userModel', UserSchema);


//function used to add a new user to the database
exports.signUpUser = function(args, callback) {

    //process and set the user data
    var newUser = new userModel({
        name: args['name'],
        surname: args['surname'],
        email: args['email'],
        username: args['username'],
        password: bcrypt.hashSync(args['password'], 10)
    });

    //save the data to the DB, return response
    newUser.save(function(err) {
        if (err) throw err;
        console.log('Record have been saved');
        callback(err, true);
    });
};

//function used to find a user in the DB, process the login details
exports.findUser = function(user, callbackfu) {
    userModel.findOne({
        username: user['username']
    }, 'name surname email username password', function(err, person) {
        if (err) throw err;
        
        //if used is found in the DB
        if (person) {
            
            //check if stored and form pass match
            if (bcrypt.compareSync(user['password'], person['password'])) {
                var returnPerson = {
                    _id: person['_id'],
                    name: person['name'],
                    surname: person['surname'],
                    email: person['email'],
                    username: person['username']
                };
                callbackfu(err, returnPerson);
            }
            else {
                callbackfu(err, null);
            }
        }
        else {
            callbackfu(err, null);
        }
    });
};

//function used to delete a user from the DB
exports.delete = function(args, newsCallback) {
    userModel.remove({
        '_id': args['_id']
    }, function(err, numberRemoved) {
        if (err) throw (err);
        if (numberRemoved.result.n == 1) {
            console.log("Removed succesfully!");
        }
        newsCallback(err, numberRemoved.result.n);
    });
};

//function used to find a user based on his username
exports.findUsername = function(user, callback) {
    userModel.findOne({
        username: user['username']
    }, 'username', function(err, person) {
        if (err) console.log("none found");
        callback(err, person);
    });
};