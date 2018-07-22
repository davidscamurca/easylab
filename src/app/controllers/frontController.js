
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        
        return res.send({ 
            "users":"http://192.168.0.21:3000/auth/",
            "reservation":"http://192.168.0.21:3000/reservation/",
            "adm": ""
        
        })

    } catch (error) {
        return res.status(400).send({ error: 'Error list endpoints API_EasyLab'});
    }
});

module.exports = app => app.use('/easy/api/v1', router);