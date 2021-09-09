const router = require('express').Router()
const path = require('path')
const workout = require('../data/workout')


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/index.html'))
})

router.get("/:name", (req, res) => {
    if (req.params.name === "push-day")
        res.sendFile(path.join(__dirname, '../templates/views/push-day.html'))
})



module.exports = router;