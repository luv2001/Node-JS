const http = require('http');
const fs = require('fs');

const port = 3000;


const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', 'utf8', function (err, data) {
        if (err) {
            res.writeHead(404)
            res.write("File not found")
        }
        else {
            res.write(data)
        }
        res.end();
    })

})

server.listen(port, function (err, res) {
    if (err) {
        console.log(`somethign went wrong ! `)
    }
    else {
        console.log(`server is running on port ${port}`)
    }
})

