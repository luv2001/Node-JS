const mongoose = require('mongoose')

const Anime = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    }
})

module.exports = mongoose.model('Anime', Anime)