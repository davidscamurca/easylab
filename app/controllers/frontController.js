
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.send({

        "auth": {
            "resource": "https://projetosinformacao.herokuapp.com/easy/api/v1/auth/",
            "method": "GET, POST, PUT, PATCH, DELETE, OPTIONS"
        },

        "reservation": {
            "resource": "https://projetosinformacao.herokuapp.com/easy/api/v1/reservation/",
            "method": "GET, POST, PUT, PATCH, DELETE, OPTIONS"
        },

        "administration": {
            "resource": "https://projetosinformacao.herokuapp.com/easy/api/v1/administration/",
            "method": "GET, POST, PUT, PATCH, DELETE, OPTIONS"
        },

        "listener": {
            "resource": "https://projetosinformacao.herokuapp.com/easy/api/v1/listener/",
            "method": "GET, POST, PUT, PATCH, DELETE, OPTIONS"
        },

        "suggestion": {
            "resource": "https://projetosinformacao.herokuapp.com/easy/api/v1/suggestion/",
            "method": "GET, POST, PUT, PATCH, DELETE, OPTIONS"
        },

        });

    } catch (error) {
        return res.status(400).send({ error: 'Error list endpoints API_EasyLab'});
    }
});

// Mostra as opções disponíveis na rota
router.options('/', function(){
    res.header('Access-Control-Allow-Methods', 'GET');
});

module.exports = app => app.use('/easy/api/v1', router);