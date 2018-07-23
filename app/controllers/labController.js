
const express = require('express');

//const authMiddleware = require('../middlewares/auth');

const Lab = require('../models/Lab');

const router = express.Router();

//router.use(authMiddleware);

router.post('/register', async (req, res) => {
    const { name } =  req.body;

    try {
        if (await Lab.findOne({ name }))
            return res.status(400).send({ error: 'Lab alredy exists'});

        // Await porque e uma requisicao assyncrona, ira retornar uma!
        // Ppromisse 
        const lab = await Lab.create(req.body);

        return res.send({ 
            lab,
        });

    } catch (err) {
        return res.status(400).send({ error: 'Lab registration failed'});
    }
});

// Rota de listagem completa
router.get('/', async (req, res) => {
    try {
        const labs = await Lab.find();
        return res.send({ labs })

    } catch (error) {
        return res.status(400).send({ error: 'Error list labs'});
    }
});


// Rota de listagem por ID
router.get('/labId', async (req, res) => {
    res.send({user: req.userId});
});

// Rota para atualizar por ID
router.put('/labId', async (req, res) => {
    res.send({user: req.userId});
});

//Rota para deletar por ID
router.delete('/labId', async (req, res) => {
    res.send({user: req.userId});
});

module.exports = app => app.use('/easy/api/v1/administration', router);