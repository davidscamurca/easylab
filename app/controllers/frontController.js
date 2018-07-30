
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.send({

        "auth": {
                "recurso": "https://projetosinformacao.herokuapp.com/easy/api/v1/auth/",
                "metodos": "GET, POST, PUT, PATCH, DELETE, OPTIONS"
        },

        "reservation": {
            "recurso": "https://projetosinformacao.herokuapp.com/easy/api/v1/reservation/",
            "metodos": "GET, POST, PUT, PATCH, DELETE, OPTIONS"
        },

        "administration": {
            "recurso": "https://projetosinformacao.herokuapp.com/easy/api/v1/administration/",
            "metodos": "GET, POST, PUT, PATCH, DELETE, OPTIONS"
        },

        "listener": {
            "recurso": "https://projetosinformacao.herokuapp.com/easy/api/v1/listener/",
            "metodos": "GET, POST, PUT, PATCH, DELETE, OPTIONS"
        },

        "suggestion": {
            "recurso": "https://projetosinformacao.herokuapp.com/easy/api/v1/suggestion/",
            "metodos": "GET, POST, PUT, PATCH, DELETE, OPTIONS"
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