const express = require('express')
const router = express.Router()
const titans = require('../models/titans')

router.get('/', async (req, res) => {
    try {
        const Titans = await titans.find()
        res.json(Titans)
    } catch (err) {
        res.status(500).json({ message: err.message })
        console.error(err)
    }
})

router.post('/', async (req, res) => {
    const titan = new titans(
        {
            name: req.body.name,
            currentHolder: req.body.currentHolder
        }
    )
    try {
        const newTitan = await titan.save()
        res.status(201).json(newTitan)

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router