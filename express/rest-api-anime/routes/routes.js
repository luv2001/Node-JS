const express = require('express')
const router = express.Router()
const anime = require('../models/anime')

router.get('/', async (req, res) => {
    try {
        const Anime = await anime.find()
        res.json(Anime)
    }
    catch (err) {
        res.json({ message: err.message })
    }
})

router.post('/', async (req, res) => {

    const Impoted_Anime = new anime({
        name: req.body.name,
        episodes: req.body.episodes
    })

    try {
        const Anime = await Impoted_Anime.save()
        res.json(Anime)
    }
    catch (err) {
        res.send({ message: err.message })
    }

})

router.delete('/:id', getAnime, async (req, res) => {


})

router.get('/:id', getAnime, async (req, res) => {
    res.send(res.anime.anime)
})

function getAnime(req, res, next) {
    let anime
    try {
        const anime = await anime.findById(req.params.id)
        if (anime == null) {
            return res.json({ message: 'Anime not found' })
        }
    }
    catch (err) {
        res.json({ message: err.message })
    }

    res.anime = anime

}

module.exports = router