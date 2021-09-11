const mongoose = require('mongoose')

const titanSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    currentHolder: {
        type: 'string',
    },
    type: {
        type: 'string',
        default: 'Elderians'
    }
})

module.exports = mongoose.model('Titans', titanSchema)