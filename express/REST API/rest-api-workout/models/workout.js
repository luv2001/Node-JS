const mongoose = require('mongoose')

const Push_Day = new mongoose.Schema({
    chest: {
        type: 'string',
        // required: true      // Chest to marni hi marni hai 
    },
    sholder: {
        type: 'string'
    },
    triceps: {
        type: 'string'
    }
})

module.exports = mongoose.model('Push_Day', Push_Day)