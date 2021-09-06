const express = require('express')
const app = express()
const path = require('path')

const port = 3005

app.use('/', require(path.join(__dirname, 'route')))

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})