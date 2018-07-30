
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
router.get('/:laboratoryId', async (req, res) => {
    try {
        const laboratory = await Lab.findById(req.params.laboratoryId)
        return res.send({ laboratory })

    } catch (error) {
        return res.status(400).send({ error: 'Error list laboratory'});
    }
});


//Rota para deletar por ID
router.delete('/:laboratoryId', async (req, res) => {
    try {
        await Lab.findByIdAndRemove(req.params.laboratoryId);
        return res.send();

    } catch (error) {
        return res.status(400).send({ error: 'Error deleting laboratory'});
    }
});

// Atualiza dados do laboratorio.
router.put('/:laboratoryId', async (req, res) => {
    try {
        const { name, isReserved } =  req.body;

        const laboratory = await Lab.findByIdAndUpdate(req.params.laboratoryId, {
            name,
            isReserved
        }, {new : true});

        return res.send({ 
            laboratory,
        });

    } catch (error) {
        return res.status(400).send({ error: 'Laboratory updating failed'});
    }
});

// Atualiza dados do laboratorio.
router.patch('/:laboratoryId', async (req, res) => {
   
        const id = req.params.laboratoryId;
        const updateOps = {};

        for (const ops of req.body) {
            updateOps[ops.propName] = ops.value;
        }

        Lab.update({ _id: id}, {$set: updateOps})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(400);
        });
});

router.options('/options', (req, res) => {
    
     options = {  
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'my-reddit-client'
        }
    };

    var resutado = JSON.parse(options);

    res.json(resutado);
    
});

module.exports = app => app.use('/easy/api/v1/administration', router);