const mongoose = require('mongoose');

const anime = new mongoose.Schema({
    name: {
        type: 'string',
        require: true
    },
    episodes: {
        type: 'number',
    }
})

module.exports = mongoose.model('anime', anime)