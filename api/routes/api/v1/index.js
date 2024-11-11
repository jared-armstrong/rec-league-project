const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
require('models/Registrant');
const Registrant = mongoose.model('signups');

// Root route
router.get('/', (req, res) => {
    res.send('Root API route');
});

// Get all the registrants in database
router.get('/registrants', async (req, res) => {
    const filter = {};
    const registrants = await Registrant.find(filter);
    console.log(registrants);
    res.json(registrants);
});

// add a new registrant
router.post('/registrants', async (req, res) => {
    try {
        const newRegistrant = new Registrant(req.body);
        await newRegistrant.save();
        res.status(201).json(newRegistrant);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
