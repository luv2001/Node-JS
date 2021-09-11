const express = require('express')
const routes = express.Router()
const titans = require('../models/titans')

//Getting all
routes.get('/', (req, res) => {
    res.send(`Hello Titan 🔥`)
})

//Getting One
routes.get('/:id', (req, res) => {
    res.send(req.params.id)
})

//Creating One
routes.post('/', (req, res) => { })


//Updating One
routes.patch('/:id', (req, res) => { })



//Deleting One
routes.delete('/:id', (req, res) => { })




module.exports = routes