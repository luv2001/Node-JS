const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render("./index.ejs", { name: "Luv" })
})

app.get('/login', (req, res) => {
    res.render("./login.ejs")
})

app.get('/register', (req, res) => {
    res.render("./register.ejs")
})

app.post('/register', (req, res) => {

})

app.listen(3000, () => {
    console.log(`It is alive on : http://localhost:3000/ `)
})