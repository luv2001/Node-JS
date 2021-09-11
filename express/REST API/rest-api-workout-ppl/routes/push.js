const express = require('express')
const { findById } = require('../models/push_data')
const router = express.Router()
const pushDay = require('../models/push_data')

router.get('/', async (req, res) => {
    try {
        const pushDay_get = await pushDay.find()
        res.json(pushDay_get)
    }
    catch (err) {
        console.error(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const pushDay_post = await new pushDay({
            exercise: req.body.exercise,
            mussule: req.body.mussule
        })
        const save_pushDay_post = await pushDay_post.save()
        res.json(save_pushDay_post)
    }
    catch (err) {
        console.log(`Erorr in post: ${err}`)
    }
})

router.get('/:id', async (req, res) => {
    const pushDay_find_by_id = await pushDay.findById(req.params.id)
    if (pushDay_find_by_id == null) {
        return res.json({ message: "Your push Day ruined" })
    }
    try {
        res.send(pushDay_find_by_id.exercise)
    }
    catch (err) {
        console.error(err)
    }
})

router.delete("/:id", async (req, res) => {
    const pushDay_find_by_id = await pushDay.findById(req.params.id)
    if (pushDay_find_by_id == null) {
        return res.json({ message: "Your push Day ruined" })
    }
    const exercise = pushDay_find_by_id.exercise

    try {
        pushDay_find_by_id.remove()
        res.send(` Your ${exercise} has been removed `)
    }
    catch (err) {
        console.log(`Err: ${err}`)
    }
})

router.patch('/:id', async (req, res) => {
    const pushDay_find_by_id = await pushDay.findById(req.params.id)
    if (pushDay_find_by_id == null) {
        return res.json({ message: "Your push Day ruined" })
    }

    if (req.body.exercise != null) {
        pushDay_find_by_id.exercise = req.body.exercise
    }
    if (req.body.mussule != null) {
        pushDay_find_by_id.mussule = req.body.mussule
    }


    try {
        const updatedPushDay = await pushDay_find_by_id.save()
        res.json(updatedPushDay)

    }
    catch (err) {
        console.log(`Err : ${err}`)
    }

})

module.exports = router