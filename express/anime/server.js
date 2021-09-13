require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT
const url = process.env.DATABASE_URL
const mongoose = require('mongoose')

const Anime = require('./models/animeSchema')

mongoose.connect(url)
const db = mongoose.connection
db.on('error', err => console.error(err))
db.once('open', () => { console.log(` Connected to database `) })

app.use('/public', express.static('public'))

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.post('/', async (req, res) => {
    const anime_post = await Anime({
        name: req.body.name
    })
    try {
        await anime_post.save()
        res.redirect('/')
    }
    catch (err) {
        console.error(err)
        res.redirect('/')
    }
})

app.get('/', async (req, res) => {
    const anime_get = await Anime.find()
    res.render('anime', { Anime: anime_get })
})

app.listen(port, () => {
    console.log(`It's app on http://localhost:${port}/`)
})