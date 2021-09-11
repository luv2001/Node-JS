const express = require('express')
const router = express.Router()
const Push_Day = require('../models/workout')

router.get('/', async (req, res) => {
    try {
        const workout = await Push_Day.find()
        res.json(workout)
    }
    catch (err) {
        res.status(500).json({ message: err })
    }
})

router.post('/', async (req, res) => {
    const workout = new Push_Day({
        chest: req.params.chest,
        sholder: req.params.sholder,
        triceps: req.params.triceps
    })

    try {
        const newWorkout = await workout.save()
        res.json(newWorkout)
    }
    catch (err) {
        res.json({ message: err.message })
    }
})

module.exports = router