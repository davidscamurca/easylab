const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/easylabapi');
mongoose.Promise = global.Promise;

module.exports = mongoose;