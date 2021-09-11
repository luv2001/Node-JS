require('dotenv').config()

const express = require('express');
const app = express()
const port = process.env.PORT
const url = process.env.DATABASE_URL
const mongoose = require('mongoose')

mongoose.connect(url)
const db = mongoose.connection

db.on('error', err => console.error(err))
db.once('open', () => { console.log(` Connected to database `) })

app.use(express.json())

app.use('/anime', require('./routes/routes'))

app.listen(port, () => {
    console.log(`Alive on http://localhost:${port}/`)
})