const mongoose = require('mongoose')

const pushDay = new mongoose.Schema({
    exercise: {
        type: 'string',
        require: true
    },
    mussule: {
        type: 'string',
    }
})

module.exports = mongoose.model('pushDay', pushDay)