const express = require('express')
const app = express()
const path = require('path')
const port = 3005


// app.set('view engine', 'hbs')

// app.get('/', (req, res) => {
//     res.render('home')
// })




app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})