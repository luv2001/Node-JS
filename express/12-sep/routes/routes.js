const express = require('express')
const router = express.Router()
const Song = require('../models/songs')

const url = "mongodb+srv://db12sep:db12sep@cluster0.ugvzc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const mongoose = require('mongoose')
mongoose.connect(url)
const db = mongoose.connection

db.on('error', (err) => console.error(err))
db.once('open', () => { console.log(` Connected to database `) })




router.get('/', async (req, res) => {
    const Song_get = await Song.find()
    res.render('songs', { Song: Song_get })
})

router.post('/', async (req, res) => {
    console.log(req.body.song)
    const song_post = new Song({
        song: req.body.song
    })

    try { await song_post.save() }
    catch (err) { console.error(err) }

    res.redirect('/')
})

module.exports = router