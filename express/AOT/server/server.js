const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080
// Tian guessing game in 3 Chance with Mongoose Mongo DB Quiz !!

app.use(express.static("public"))

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use("/", require(path.join(__dirname, '../routes/router')))

app.listen(port, () => {
    console.log('listening on port ' + port)
})