const app = require('express')()
const port = 8080
const path = require('path')

app.use('/', require(path.join(__dirname, '../routes/routes')))



app.listen(8080, () => {
    console.log(`server is running on port ${port}`)
})