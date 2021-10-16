//load all required modules
var express = require('express');
var productRoutes = express.Router();
var formidable = require("formidable");
var Quagga = require('quagga').default;
var fs = require('fs-extra');

//set default message blank
var productOptions = {
    message: ""
};

//load option settings
var loginOptions = require('../options/loginOptions');
var profileOptions = require('../options/profileOptions');

//load required models
var productModel = require('../models/Products');

/**
 * Route serving the product dashboard
 * request parameter used to determine page and pagination
 * */
productRoutes.route("/:page")
    .get(function(req, res) {
        if (req.session.user) {
            
            var myCallback = function(err, data) {
                if (err) console.log('Error on listing products'); // Check for the error and throw if it exists.
                
                //if product data for the user has been found
                if (data) {
                    
                    //set data in profile options
                    profileOptions.addProducts(data);
                    //set max number of pages, used for pagination
                    profileOptions.addmaxPage(Math.ceil(data.length / 5));
                    
                    //set the current page, get it from the request parameters
                    profileOptions.addcurrentPage(req.params.page);
                    
                    //add user data to the options
                    profileOptions.adduser({
                        id: req.session.user._id,
                        username: req.session.user.username,
                        name: req.session.user.name,
                        surname: req.session.user.surname,
                        email: req.session.user.email
                    });
                    
                    //update the view with the new information
                    res.render("layout", profileOptions.read());
                    profileOptions.poraka("");

                }
            };
            
            //find products for the logged in user
            productModel.findProduct(req.session.user.username, myCallback);
        } else {
            loginOptions.poraka("Сесијата истече, логирајте се повторно.");
            res.redirect('/');
        }
    })
    .post(function(req, res) {
        if (req.session.user) {
            var path;
            
            //Get the form data to add a new product
            var form = new formidable.IncomingForm();
            form.on('fileBegin', function(name, file) {
                file.path = './public/images/tmp/' + file.name;
                path = file.path;
            });
            form.parse(req, function(err, fields, files) {
                if (err) throw err;
                
                //check if data comes from input form
                if (fields['post-type'] == 'addproduct') {
                    var myCallback = function(err, data) {
                        if (err) console.log('Error on home page'); // Check for the error and throw if it exists.
                        if (data) {
                            
                            //on success, the product was added to the database
                            //display success message and redirect
                            profileOptions.poraka("Производот беше успешно додаден");
                            res.redirect('/products/' + req.params.page);
                        }
                    };
                    
                    //add the fields to the database
                    productModel.add(fields, myCallback);
                    //console.log(fields);

                } else {
                    
                    //else live camera was used to scan the barcode and add the product
                    
                    //callback function to process data from the Quagga library
                    var patternCallback = function(result) {
                        console.log(result);
                        //if barcode has been detected
                        if (result) {
                            
                            //callback function for the barcode search in the DB
                            var namecallback = function(err,data){
                                if (err) throw err;
                                
                                //if found, return json response with the barcode number and product name
                                if(data!=null){
                                    res.json({
                                        'barcode': result.codeResult.code,
                                        'name' : data['name']
                                    });
                                }else{
                                    //if barcode not found in DB, return json response with just the barcode number and emptu name
                                    res.json({
                                        'barcode': result.codeResult.code,
                                        'name' : null
                                    });
                                }
                            };
                            
                            //search if it exists in the database already
                            productModel.findProductName(result.codeResult.code, namecallback);
                        } else {
                            console.log("not detected");
                            res.json();
                        }
                    };
                    
                    
                    //detect the barcode, if detected, use callback function patternCallback to process the data
                    Quagga.decodeSingle({
                        src: path,
                        numOfWorkers: 0, // Needs to be 0 when used within node
                        inputStream: {
                            size: 800 // restrict input-size to be 800px in width (long-side)
                        },
                        locate: true,
                        decoder: {
                            readers: [
                                'code_128_reader', 'ean_reader', 'ean_8_reader', 'code_39_reader', 'code_39_vin_reader', 'codabar_reader', 'upc_reader', 'upc_e_reader', 'i2of5_reader'
                            ],
                            multiple: false
                        },
                    }, patternCallback); //end of quagga

                }
            });

        } else {
            loginOptions.poraka("Сесијата истече, логирајте се повторно.");
            res.redirect('/');
        }
    });


/**
 * Route to remove the product
 * Gets the product id as a request parameter
 * */
productRoutes.route('/remove/:id')
    .get(function(req, res) {
        if (req.session.user) {
            
            //get product id
            var id = req.params.id;

            //callback function after the product is deleted from the DB
            var newCallbackFu = function(err, data) {
                if (err) throw err;

                //On success display success message and redirect to default product page
                if (data == 1) {
                    profileOptions.poraka("Продуктот е успешно избришан");
                    res.redirect('/products/1');
                }
            };
            
            //delete the product from the DB
            productModel.deleteProduct(id, newCallbackFu);
        } else {
            loginOptions.poraka("Сесијата истече, логирајте се повторно.");
            res.redirect('/');
        }
    });


/**
 * Route serving the individual product page
 * edit, delete, view operations are available from this page
 * */
productRoutes.route('/item/:id')
    .get(function(req, res) {
        if (req.session.user) {
            
            //get the product id from the request param
            var id = req.params.id;
            
            //callback function, once the search for product data completes
            var callback = function(err, data) {
                if (err) throw err;
                
                //if data is found in the DB
                if (data) {
                    if (data.kupuvac == req.session.user.username) {
                        
                        //set product data in the options
                        productOptions['product'] = data;
                        productOptions['title'] = "Продукт " + data.name;
                        productOptions['description'] = "Страна со информации за специфичен продукт.";
                        productOptions['user'] = {
                            id: req.session.user._id,
                            username: req.session.user.username,
                            name: req.session.user.name,
                            surname: req.session.user.surname,
                            email: req.session.user.email
                        };

                        //second callback, once similar products have been searched for
                        var secondCallback = function(err, data) {
                            if (err) throw err;
                            
                            //add similar product data to the options
                            productOptions['similarProducts'] = data;
                            //update the product page with new data
                            res.render("product", productOptions);
                            productOptions['message'] = "";
                        };
                        
                        //find similar products as well
                        productModel.findSimilar(data, secondCallback);
                    } else {
                        res.redirect('/products/1');
                    }
                } else {
                    res.redirect('/products/1');
                }
            }
            
            //find data about the product in the DB
            productModel.findOne(id, callback);

        } else {
            loginOptions.poraka("Сесијата истече, логирајте се повторно.");
            res.redirect('/');
        }
    })
    .post(function(req, res) {
        if (req.session.user) {
            
            //Get data from the product form, data will be used to update the product
            var form = new formidable.IncomingForm();
            form.parse(req, function(err, fields, files) {
                if (err) throw err;

                //callback function after the product has been updated
                var myCallback = function(err, data) {
                    if (err) console.log('Error on product update page'); // Check for the error and throw if it exists.
                    
                    //on success display success message and refresh the page
                    if (data) {
                        productOptions['message'] = "Производот беше успешно изменет";
                        res.redirect('/products/item/' + req.params.id);
                    }
                };
                
                //update the product with the new data
                productModel.update(req.params.id, fields, myCallback);
            });
        } else {
            loginOptions.poraka("Сесијата истече, логирајте се повторно.");
            res.redirect('/');
        }
    });

/**
 * Route used to get all the product suggestions, used for ajax calls
 * */
productRoutes.route('/suggestions/findall')
    .post(function(req, res) {
        var callbacks = function(err, data) {
            if (err) throw err;
            res.json(data);
        };
        productModel.findSuggestion(callbacks);
    });

/**
 * Route used to get the data for the diagrams and search form
 * depending on the request parameter, decide what option to process
 * it can find the latest five products, the most expensive products or one specific product
 * */
productRoutes.route('/outside-calls/:param')
    .post(function(req, res) {
        
        //if param = latestFive, find the last 5 added products
        if (req.params.param == 'latestFive') {
            if (req.session.user) {
                var callbacks = function(err, data) {
                    if (err) throw err;
                    
                    //on success return json response with the data
                    res.json(data);
                };
                
                //find latest 5 products added by the user
                productModel.findLatestFive(req.session.user.username, callbacks);
            }
        } else if (req.params.param == 'expensiveFive') {
            
            //if req param = expensiveFive, search for the 5 most expensive products
            if (req.session.user) {
                var callbackz = function(err, data) {
                    if (err) throw err;
                    //on success return json response with the data
                    res.json(data);
                };
                
                //find the most expensive 5 products for the user
                productModel.findExpensiveFive(req.session.user.username, callbackz);
            }
        } else if (req.params.param == 'findProductName') {
            
            //if param = findProductName, search for a product by name
            if (req.session.user) {
                
                //get the form data and process it
                var form = new formidable.IncomingForm();
                form.parse(req, function(err, fields, files) {
                    if (err) throw err;
                    
                    var callbackzt = function(err, data) {
                        if (err) throw err;
                        res.json(data);
                    };
                    
                    //search for a product, based on the barcode number
                    productModel.findProductName(fields['barcode'], callbackzt);
                });

            }
        } else if (req.params.param == 'search-form') {
            
            //if param = search form, process the data from the search form
            if (req.session.user) {
                
                //get data from the search form and proccess it
                var form = new formidable.IncomingForm();
                form.parse(req, function(err, fields, files) {
                    if (err) throw err;
                    
                    //callback function for the product search
                    var probacallback = function(err, data) {
                        if (err) throw err;
                        
                        //return all data as a json response
                        res.json(data);
                    };
                    
                    //find all products based on criteria
                    productModel.findAll(fields['optionsRadios'], fields['search-term'], probacallback);
                });
            }
        } else {
            if (req.session.user) {
                var callbackOne = function(err, data) {
                    if (err) throw err;
                    var callbackTwo = function(err, data) {
                        if (err) throw err;
                        res.json(data);
                    };
                    productModel.findSimilar(data, callbackTwo);
                };

                productModel.findOne(req.params.param, callbackOne);
            }
        }
    });

//export all routes to other modules
module.exports = productRoutes;