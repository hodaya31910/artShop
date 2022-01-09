//החיבור למסד נתונים
var mongoose = require('mongoose');
mongoose.set('debug', true);
var config = require("../Utilities/config").config;
 
module.exports = function() {
mongoose.Promise = require('bluebird');
console.log(config.DB_URL.url);
var db = mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log("connected DB");
    }).catch((err) => console.log(err));

require('../Models/Document');
return db;

};

mongoose.connect
