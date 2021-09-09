const router = require('express').Router();
const path = require('path');

const titans = require('../data/titans')


router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, "../templates/index.html"))
    res.render("home", {
        titans: titans,
        style: 'CSS/home.css'
    })
})


router.get('/titans/:slug', (req, res) => {
    const Titan = titans.filter(e => {
        return e.slug === req.params.slug;
    })
    res.render("titan", {
        Titan: Titan,
        style: 'CSS/titan.css'
    })
})

router.get("/grey/:slug", (req, res) => {
    const Titan = titans.filter(e => {
        return e.slug === req.params.slug;
    })
    res.render("grey",
        {
            Titan: Titan,
            style: 'CSS/grey.css',
        })
})

module.exports = router;