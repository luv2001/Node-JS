const http = require('http');
const fs = require('fs');
const port = 8000;

const server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/html');


    var url = req.url

    if (url === "/") {
        res.write("Don't be shy This is home page")
        res.end();
    } else

        if (url === "/about") {
            res.write("Don't be shy This is about ABOUT ABOUT")
            res.end();
        }
        else {
            fs.readFile('./routing/404.html', (error, response) => {
                if (error) { console.error(`error aa rahi hai 404 wale mein`) }
                else {
                    res.write(response)
                    res.end()
                }
            })


        }


    // fs.readFile('./index.html', (err, data) => {
    //     if (err) { console.error(`err`); }
    //     res.write(data)
    //     res.end()
    // })


})

server.listen(port, 'localhost', () => {
    console.log(`Gand Mari hui hai Meri puri Gand Mari hui hai`)
})