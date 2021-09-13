const mongoose = require('mongoose')

const Song = new mongoose.Schema({
    song: {
        type: 'string',
        require: true
    }
})



module.exports = mongoose.model('Song', Song)