const express = require('express');
const Lab = require('../models/Lab');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { name } =  req.body;

    try {
        if (await Lab.findOne({ name }))
            return res.status(400).send({ error: 'Lab alredy exists'});

        const lab = await Lab.create(req.body);

        //lab.password = undefined;

        return res.send({ 
            lab,
        });

    } catch (err) {
        return res.status(400).send({ error: 'Lab registration failed'});
    }
});

module.exports = app => app.use('/adm', router);