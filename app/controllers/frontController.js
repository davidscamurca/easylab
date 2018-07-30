
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        return res.send({ 
            "users": "https://projetosinformacao.herokuapp.com/easy/api/v1/auth/",

            "reservation": "https://projetosinformacao.herokuapp.com/easy/api/v1/reservation/",

            "administration": "https://projetosinformacao.herokuapp.com/easy/api/v1/administration",
            
            "listener" : "ttp://projetosinformacao.herokuapp.com/easy/api/v1/listener",

            "suggestion" : "ttp://projetosinformacao.herokuapp.com/easy/api/v1/suggestion"
        })
    } catch (error) {
        return res.status(400).send({ error: 'Error list endpoints API_EasyLab'});
    }
});

module.exports = app => app.use('/easy/api/v1', router);