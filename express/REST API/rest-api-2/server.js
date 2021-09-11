require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on('error', err => console.error(err))
db.once('open', () => { console.log(`Connected to database`) })

app.use(express.json())
const titanRouter = require('./routes/titans')
app.use('/titans', titanRouter)

app.listen(port, () => {
    console.log(` It's alive on http://localhost:${port}/ `)
})