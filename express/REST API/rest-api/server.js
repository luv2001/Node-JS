require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT
const mongoose = require('mongoose')

app.use(express.json()) // Middle for json

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection
db.on('error', (eroor) => { console.log(eroor) })
db.once('open', () => { console.log(` Connected to database `) })

const titanRoutes = require('./routes/titanRoutes')
app.use('/titans', titanRoutes)

app.listen(port, () => {
    console.log(`This is alive on http://localhost:${port}`)
})