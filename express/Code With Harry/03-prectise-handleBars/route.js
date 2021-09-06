const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send("Routers Working man")
})

module.exports = router