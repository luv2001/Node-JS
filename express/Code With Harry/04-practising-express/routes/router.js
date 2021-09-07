const express = require('express');
const app = express();
const path = require('path');

const router = express.Router();

const titans = require('../data/titans')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../templates/index.html"))
})

router.get('/titans/:slug', (req, res) => {
    const requireTitan = titans.filter(e => {
        return e.slug === req.params.slug;
    })
    const titanSlug = requireTitan[0].slug + ".html"
    res.sendFile(path.join(__dirname, `../templates/Titans/${titanSlug}`))
})

module.exports = router;