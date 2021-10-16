//include requred modules
var mongoose = require('mongoose');

//define the schema for the Product Model
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    barcode: String,
    kupuvac: String,
    name: String,
    prodavnica: String,
    grad: String,
    cena: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

//define the productModel based on the schema
var productModel = mongoose.model('productModel', ProductSchema);

//function used to add a product to the DB
exports.add = function(args, callback) {

    //process the data that will be added to the DB
    var newProduct = new productModel({
        barcode: args['barcode'],
        kupuvac: args['username'],
        name: args['name'],
        prodavnica: args['prodavnica'],
        grad: args['grad'],
        cena: args['cena']
    });

    //save the data to the DB
    newProduct.save(function(err) {
        if (err) throw err;
        console.log('Record have been saved');
        callback(err, true);
        return;
    });
};

//function used to find products based on buyer parameter
exports.findProduct = function(args, callback) {

    //define query parameter
    var query = productModel.find({
        kupuvac: args
    });

    //define what fields to get from the DB
    query.select('name prodavnica grad cena date');
    //sort the returned data
    query.sort({
        date: -1
    });
    
    //execute the query and get the data
    query.exec(function(err, product) {
        if (err) throw (err);
        callback(err, product);
    });
};

//function used to find only one product
exports.findOne = function(arg, callback) {
    productModel.findOne({
        _id: arg
    }, 'kupuvac barcode name prodavnica grad cena date', function(err, product) {
        if (err) console.log("none found");
        callback(err, product);
    });
};

//function used to find all similar products
exports.findSimilar = function(args, callback) {

    //set query search parameter, in this case barcode number
    var query = productModel.find({
        barcode: args['barcode']
    });

    //what fields to recover from the record
    query.select('name prodavnica grad cena');
    //set record conditions
    query.where('cena').lt(args['cena']);

    //execute the query and get the data
    query.exec(function(err, product) {
        if (err) throw (err);
        callback(err, product);
    });
};

//function used to delete a product from the DB based on product ID
exports.deleteProduct = function(args, newsCallback) {
    productModel.remove({
        _id: args
    }, function(err, numberRemoved) {
        if (err) throw (err);
        if (numberRemoved.result.n == 1) {
            console.log("Removed product succesfully!");
        }
        newsCallback(err, numberRemoved.result.n);
    });
};

//function used to delete all products for a specific user
exports.deleteAll = function(args) {

    productModel.remove({
        kupuvac: args['username']
    }, function(err, numberRemoved) {
        if (err) throw (err);
        if (numberRemoved.result.n > 0) {
            console.log("Removed all products succesfully!");
        }
    });
};

//function used to update data for a product already present in the DB
exports.update = function(id, fields, callback) {
    
    //search for product based on condition (id)
    var conditions = {
        _id: id
    };
    //define the product changes
    var change = {
        name: fields['name'],
        prodavnica: fields['prodavnica'],
        grad: fields['grad'],
        cena: fields['cena'],
    };
    //update the new changes for the product who fulfils the condition
    productModel.update(conditions, change, function(err, numAffected) {
        if (err) throw (err);
        
        //return the number of affected records
        callback(err, numAffected.n);
    });
};

//function used to find the latest 5 products for a user
exports.findLatestFive = function(args, callback) {

    var query = productModel.find({
        kupuvac: args
    });

    query.select('name prodavnica cena date');
    query.sort({
        date: -1
    });
    query.limit(5);

    query.exec(function(err, products) {
        if (err) throw (err);
        callback(err, products);
    });
};

//function used to find the most expensive 5 products for a user
exports.findExpensiveFive = function(args, callback) {

    var query = productModel.find({
        kupuvac: args
    });
    query.select('name cena');
    query.sort({
        cena: -1
    });
    query.limit(5);

    query.exec(function(err, products) {
        if (err) throw (err);
        callback(err, products);
    });
};

//function used to find all products based on a parameter like similar name, town or store
exports.findAll = function(key,pair, callback) {
    var options;
    if (key=='name'){options = {name:pair};}
    if (key=='prodavnica'){options = {prodavnica:pair};}
    if (key=='grad'){options = {grad:pair};}

    productModel.find( options, 'kupuvac barcode name prodavnica grad cena date', function(err, products) {
        if (err) console.log("none found");
        callback(err, products);
    });
};

//function used to find the product name based on barcode number
exports.findProductName = function(barcode, callback){
    productModel.findOne({
        barcode: barcode
    }, 'name', function(err, product) {
        if (err) console.log("none found");
        callback(err, product);
    });
}