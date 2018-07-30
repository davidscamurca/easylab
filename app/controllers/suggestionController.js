const express = require('express');
const cors = require('cors');

// const authMiddleware = require('../middlewares/auth');

const Suggestion = require('../models/Suggestion');

const router = express.Router();

// router.use(authMiddleware);

// Rota para registrar
router.post('/register', async (req, res) => {
    try {    
        const suggestion = await Suggestion.create(req.body);
        return res.send({ suggestion });
    } catch (error) {
        return res.status(400).send({ error: 'Suggestion registration failed'});
    }
});

// Rota de listagem completa
router.get('/', async (req, res) => {
    try {
        const suggestions = await Suggestion.find();
        return res.send({ suggestions });
    } catch (error) {
        return res.status(400).send({ error: 'Error list suggestions'});
    }
});

// Rota de listagem por ID
router.get('/:suggestionId', async (req, res) => {
    try {
        const suggestion = await Suggestion.findById(req.params.suggestionId)
        return res.send({ suggestion });
    } catch (error) {
        return res.status(400).send({ error: 'Error list suggestion'});
    }
});

// Atualiza dados da sugestão
router.put('/:suggestionId', async (req, res) => {
    try {
        const { name, nameSuggestion, description } =  req.body;

        const suggestion = await Suggestion.findByIdAndUpdate(req.params.suggestionId, {
            name, nameSuggestion, description
        }, {new : true});

        return res.send({ suggestion });

    } catch (error) {
        return res.status(400).send({ error: 'Suggestion updating failed'});
    }
});

// Atualizar algum dado da sugestão.
router.patch('/:suggestionId', async (req, res) => {
   
    const id = req.params.suggestionId;
    const updateOps = {};

    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    Suggestion.update({ _id: id}, {$set: updateOps}).exec().then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(400);
    }); 
});

// Rota para deletar por ID
router.delete('/:suggestionId', async (req, res) => {
    try {
        await Suggestion.findByIdAndRemove(req.params.suggestionId);
        return res.send();

    } catch (error) {
        return res.status(400).send({ error: 'Error deleting suggestion'});
    }
});

// Mostra as opções disponíveis na rota
router.options('/', function(){
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
});

module.exports = app => app.use('/easy/api/v1/suggestion', router);