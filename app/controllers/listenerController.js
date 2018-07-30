const express = require('express');

// const authMiddleware = require('../middlewares/auth');

const Listener = require('../models/Listener');

const router = express.Router();

// router.use(authMiddleware);

// Rota para registrar
router.post('/register', async (req, res) => {
    try {    
        const listener = await Listener.create(req.body)
        return res.send({ listener });
    } catch (error) {
        return res.status(400).send({ error: 'Listener registration failed'});
    }
});

// Rota de listagem completa
router.get('/', async (req, res) => {
    try {
        const listener = await Listener.find().populate('class');;
        return res.send({ listener });
    } catch (error) {
        return res.status(400).send({ error: 'Error list listener'});
    }
});

// Rota de listagem por ID
router.get('/:listenerId', async (req, res) => {
    try {
        const listener = await Listener.findById(req.params.listenerId).populate('class');
        return res.send({ listener });
    } catch (error) {
        return res.status(400).send({ error: 'Error list listener'});
    }
});

// Atualiza dados do ouvinte
router.put('/:listenerId', async (req, res) => {
    try {
        const { name } =  req.body;

        const listener = await Listener.findByIdAndUpdate(req.params.listenerId, {
            name
        }, {new : true});

        return res.send({ listener });

    } catch (error) {
        return res.status(400).send({ error: 'Listener updating failed'});
    }
});

// Atualizar algum dado do ouvinte.
router.patch('/:listenerId', async (req, res) => {
   
    const id = req.params.listenerId;
    const updateOps = {};

    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    Listener.update({ _id: id}, {$set: updateOps}).exec().then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(400);
    }); 
});

// Rota para deletar por ID
router.delete('/:listenerId', async (req, res) => {
    try {
        await Listener.findByIdAndRemove(req.params.listenerId);
        return res.send();

    } catch (error) {
        return res.status(400).send({ error: 'Error deleting listener'});
    }
});

// Mostra as opções disponíveis na rota
router.options('*', (req, res) => {
    
    options = {  
       url: 'http://projetosinformacao.herokuapp.com/easy/api/v1/listener',
       method: 'GET',
       method: 'POST',
       method: 'PUT',
       method: 'PATCH',
       method: 'DELETE',
       method: 'OPTIONS'
   };

   var resutado = JSON.parse(options);

   res.json(resutado);
   
});

module.exports = app => app.use('/easy/api/v1/listener', router);
