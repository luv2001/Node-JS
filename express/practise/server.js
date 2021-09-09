const express = require('express')
const port = 3004
const path = require('path')

const app = express()

app.use('/', require(path.join(__dirname, 'routes/blog')))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

//super Clean express JS routing