const express = require('express')
const app = express()
const port = 8000

const mongoose = require('mongoose')
const url = "mongodb://localhost/push"
mongoose.connect(url)

const db = mongoose.connection
db.on('error', err => console.error(err))
db.once('open', () => { console.log(` Connected to database `) })

app.use(express.json())

app.use('/push', require('./routes/push'))

app.listen(port, () => {
    console.log(`It's alive on http://localhost:${port}/`)
})