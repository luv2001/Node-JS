const express = require('express')
const port = 3004

const app = express()

app.get('/', (req, res) => {
    res.send("Kaise Ho bhai")
})

app.listen(port, () => { })