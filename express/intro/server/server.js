const express = require('express')
const app = express()
const path = require('path')
const port = 3003

// app.use(express.static(path.join(__dirname, "../public")))

app.get('/:name', (req, res) => {
    res.send(`Hello you are ${req.params.name}`)
    res.sendFile('./index.html')
})

app.listen(port, (err, res) => {
    console.log(`server is ruunig`)
})




