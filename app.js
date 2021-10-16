var express = require('express');
var cookieSession = require("cookie-session");
var favicon = require('serve-favicon');
const dotenv = require('dotenv');
dotenv.config();
var app = express();

//connect to database
var mongoose = require('mongoose');
var db_host = process.env.DB_HOST;
var db_user = process.env.DB_USER;
var db_pass = process.env.DB_PASS;
var db_name = process.env.DB;
mongoose.connect('mongodb+srv://' + db_user + ':' + db_pass + '@' + db_host + db_name + '?retryWrites=true&w=majority');
var db = mongoose.connection;
db.once('open', function() {
  console.log("we're connected!");
});

//define where are the views and set view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//define where are public files (css,js,images) and favicon
app.use("/public", express.static('public'));
app.use(favicon(__dirname + '/public/images/favi.ico'));

app.use(cookieSession({
  name: 'session',
  keys: ['ExpanseTracker']
}));

//include the app routes
var userRoutes = require('./routes/userRoutes');
var productRoutes = require('./routes/productRoutes');
app.use('/', userRoutes);
app.use('/products', productRoutes);

//close db connection when node proccess is terminated        
var gracefulExit = function() {
  mongoose.connection.close(function() {
    console.log('Mongoose default connection with DB is disconnected through app termination');
    process.exit(0);
  });
};

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

//define which ip and port the server should listen for requests
var port = process.env.PORT || 8080;

var listener = app.listen(port, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});

module.exports = app;