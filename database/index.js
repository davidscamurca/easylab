const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/easylabapi');
mongoose.connect('mongodb://heroku_dzffswpj:o3t0rv59fu8cq6vjl37jfp4jv0@ds243441.mlab.com:43441/heroku_dzffswpj');
mongoose.Promise = global.Promise;

module.exports = mongoose;