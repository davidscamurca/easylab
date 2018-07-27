
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        return res.send({ 
            "users": "https://projetosinformacao.herokuapp.com/easy/api/v1/auth/",

            "reservation": "https://projetosinformacao.herokuapp.com/easy/api/v1/reservation/",

            "administration": "https://projetosinformacao.herokuapp.com/easy/api/v1/administration"    
        })
    } catch (error) {
        return res.status(400).send({ error: 'Error list endpoints API_EasyLab'});
    }
});

module.exports = app => app.use('/easy/api/v1', router, function(res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});