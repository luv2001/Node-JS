const mongoose = require('mongoose')

const titans = new mongoose.Schema({
    name: {
        type: string,
        required: true
    },
    currentHolder: {
        type: string
    },
    type: {
        type: string,
        default: "Elderian"
    }
})

module.exports = mongoose.model('Titans', titans)