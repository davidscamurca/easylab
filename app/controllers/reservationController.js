
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
        const reservations = await Reservation.find().populate('user');
        return res.send({ reservations })

    } catch (error) {
        return res.status(400).send({ error: 'Error list reservations'});
    }
});

// Rota listagem por ID
router.get('/:reservationId', async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.reservationId).populate('user');
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

// router.put('/:reservationId', async (req, res) => {
//     const { laboratory } =  req.body;

//     try {
//         if (await Reservation.findOne({ laboratory }))
//             return res.status(400).send({ error: 'This lab is reserved'});

//         // Await porque e uma requisicao assyncrona, ira retornar uma!
//         // Ppromisse 

//         //na hora da reserva, estou pegando o usuario autenticado !!!
//         const reservation = await Reservation.create({ ...req.body, user: req.userId});

//         return res.send({ 
//             reservation,
//         });

//     } catch (err) {
//         return res.status(400).send({ error: 'Reserve registration failed'});
//     }
// });

router.options("*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
    res.status(200);
    //res.send(200);
});


module.exports = app => app.use('/easy/api/v1/reservation', router);