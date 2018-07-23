
const express = require ('express');

//Para usar o token devo descomentar
//const authMiddleware = require('../middlewares/auth');

const Reservation = require('../models/Reservation');

const router = express.Router();

//Para usar o token devo descomentar
//router.use(authMiddleware);


router.post('/register', async (req, res) => {
    const { laboratory } =  req.body;

    try {
        if (await Reservation.findOne({ laboratory }))
            return res.status(400).send({ error: 'This lab is reserved'});

        // Await porque e uma requisicao assyncrona, ira retornar uma!
        // Ppromisse 
        const reservation = await Reservation.create(req.body);

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
        const reservations = await Reservation.find();
        return res.send({ reservations })

    } catch (error) {
        return res.status(400).send({ error: 'Error list reservations'});
    }
});

module.exports = app => app.use('/easy/api/v1/reservation', router);