const http = require('http');

const listenNa = http.createServer(function (req, res) {
    res.writeHead("It is running")
    res.end()
})

listenNa.listen(3001, function (err, res) {
    if (err) {
        console.log(`There is some error`)
    }
    else {
        console.log(` It is runnig on port 3001 `)
    }
})