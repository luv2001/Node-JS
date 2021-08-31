const fs = require('fs')



// Read Files 
fs.readFile('./docs/fs-module.txt', (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(data.toString())
    }
})
console.log("oi This is Executed ==> Async Javscript")