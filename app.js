const http = require('http');
const fs = require('fs')
const port = 5000

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' })
    fs.readFile('./html/index.html', function (err, html) {
        if (err) {
            res.writeHead(404)
            res.write(`File Not Found`)
        }
        else {
            res.write(html)
        }
        res.end()
    })



})

server.listen(port, function (error) {
    {
        if (error) {
            console.log(`Something went wrong ${error}`);
            console.log(` server  `)
        }
        else {
            console.log(`Server is running on port ${port}`);
        }
    }
})