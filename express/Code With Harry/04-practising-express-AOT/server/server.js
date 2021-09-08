const app = require('express')()
const path = require('path')
const port = 8080
// Tian guessing game in 3 Chance with Mongoose Mongo DB Quiz !!

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use("/", require(path.join(__dirname, '../routes/router')))

app.listen(port, () => {
    console.log('listening on port ' + port)
})