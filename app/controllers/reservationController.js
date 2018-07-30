
const express = require ('express');

//Para usar o token devo descomentar
const authMiddleware = require('../middlewares/auth');

const Reservation = require('../models/Reservation');

const router = express.Router();

//Para usar o token devo descomentar
router.use(authMiddleware);


router.post('/register', async (req, res) => {
    const { laboratory } =  req.body;

    try {
        if (await Reservation.findOne({ laboratory }))
            return res.status(400).send({ error: 'This lab is reserved'});

        // Await porque e uma requisicao assyncrona, ira retornar uma!
        // Ppromisse 

        //na hora da reserva, estou pegando o usuario autenticado !!!
        const reservation = await Reservation.create({ ...req.body, user: req.userId});
        return res.send({ 
            reservation,
        });

    } catch (err) {
        return res.status(400).send({ error: 'Reserve registration failed'});
    }
});

// Rota de listagem completa
router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find().populate('user').populate('laboratory');
        
        return res.send({ reservations })
        
    } catch (error) {
        return res.status(400).send({ error: 'Error list reservations'});
    }
});

// Rota listagem por ID
router.get('/:reservationId', async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.reservationId).populate('user').populate('laboratory');
        return res.send({ reservation })

    } catch (error) {
        return res.status(400).send({ error: 'Error list reservation'});
    }
});

// Rota listagem por ID
router.delete('/:reservationId', async (req, res) => {
    try {
        await Reservation.findByIdAndRemove(req.params.reservationId);
        return res.send()

    } catch (error) {
        return res.status(400).send({ error: 'Error deleting reservation'});
    }
});

// Atualiza os dados da reserva: que pode ser DATA e OBSERVACOES
router.put('/:reservationId', async (req, res) => {
    try {
        const { observations, data } =  req.body;

        const reservation = await Reservation.findByIdAndUpdate(req.params.reservationId, {
            observations,
            data
        }, {new : true});

        return res.send({ 
            reservation,
        });

    } catch (err) {
        return res.status(400).send({ error: 'Reserve updating failed'});
    }
});

router.patch('/:reservationId', async (req, res) => {
   
    const id = req.params.reservationId;
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

// Mostra as opções disponíveis na rota
router.options('/', function(){
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
});
    
module.exports = app => app.use('/easy/api/v1/reservation', router);

