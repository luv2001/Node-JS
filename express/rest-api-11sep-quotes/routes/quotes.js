const express = require('express')
const router = express.Router()
const Quote = require('../models/quote_data')

router.get('/', async (req, res) => {
    try {
        const Quote_get = await Quote.find()
        res.json(Quote_get)
    }
    catch (err) {
        res.json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const Quote_post = await new Quote({
            quote: req.body.quote,
            author: req.body.author
        })
        const save_Quote_post = await Quote_post.save()
        res.json(save_Quote_post)
    }
    catch (err) {
        res.json({ message: err })
    }
})

function getQuote(req, res, next) { }

module.exports = router