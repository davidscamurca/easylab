const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/easylabapi');
mongoose.connect('mongodb://davidscamurca2018:davidscamurca2018@ds243441.mlab.com:43441/heroku_dzffswpj');
mongoose.Promise = global.Promise;

module.exports = mongoose;