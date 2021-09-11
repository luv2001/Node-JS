const mongoose = require('mongoose')

const Quote = new mongoose.Schema({
    quote: {
        type: 'string',
        required: true,
    },
    author: {
        type: 'string',
    }
})

module.exports = mongoose.model('Quote', Quote)