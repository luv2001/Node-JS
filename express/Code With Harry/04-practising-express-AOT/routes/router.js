const router = require('express').Router();
const path = require('path');

const titans = require('../data/titans')

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, "../templates/index.html"))
    res.render("home", {
        titans: titans
    })
})

// router.get("/titan-list", (req, res) => {
//     res.render("titan-list", {
//         titans: titans
//     })
// })

router.get('/titans/:slug', (req, res) => {
    const requireTitan = titans.filter(e => {
        return e.slug === req.params.slug;
    })
    const titanSlug = requireTitan[0].slug + ".html"
    res.sendFile(path.join(__dirname, `../templates/Titans/${titanSlug}`))
})

module.exports = router;