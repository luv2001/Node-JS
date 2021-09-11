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

router.get('/:id', async (req, res) => {
    try {
        const Quote_get_by_id = await Quote.findById(req.params.id)
        if (Quote_get_by_id == null) {
            return res.json({ message: "Your quote could not found" })
        }
        res.send(Quote_get_by_id.author)
    }
    catch (err) {
        console.log(err)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const Quote_get_by_id = await Quote.findById(req.params.id)
        if (Quote_get_by_id == null) {
            return res.json({ message: "Your quote could not found" })
        }
        const author_name = Quote_get_by_id.author
        Quote_get_by_id.remove();
        res.json({ message: `${author_name}'s quote has been removed` })
    }
    catch (err) {
        console.error(err)
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

async function getQuote(req, res, next) {
    let Quote_getQuote
    try {
        Quote_getQuote = await Quote.findById(req.params.id)
        if (Quote_getQuote == null) {
            return res.json({ message: "Quote not found" })
        }
    }
    catch (err) {
        res.json({ message: err.message })
    }
    res.quote = Quote_getQuote
    next()
}

module.exports = router