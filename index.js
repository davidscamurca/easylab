const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

require('./app/controllers/index')(app);

var porta = process.env.PORT || 8080;
app.listen(porta);
