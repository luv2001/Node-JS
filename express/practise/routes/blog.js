// routess
const express = require('express')
const router = express.Router();
const path = require('path')

const blogs = require('../data/blog_data')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/index.html'))
})

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/about.html'))
})

router.get('/titan/:slug', (req, res) => {

    myBlog = blogs.filter((e) => {
        return e.slug == req.params.slug
    })
    console.log(myBlog)
    res.sendFile(path.join(__dirname, '../templates/titan.html'))

})

module.exports = router;