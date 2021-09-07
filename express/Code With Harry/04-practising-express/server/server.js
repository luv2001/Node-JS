const express = require('express')
const app = express()
const path = require('path')
const port = 8080


app.use('/', require(path.join(__dirname, '../routes/router')))



app.listen(port)