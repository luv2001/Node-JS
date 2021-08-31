const fs = require('fs')

// Read Files 
// fs.readFile('./docs/fs-module.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(data.toString())
//     }
// })
// console.log("oi This is Executed ==> Async Javscript")

// Writing from the file 
// fs.writeFile('./docs/fs-module.txt', 'Tere naam se jee luun Ter naam se mar jaun', (error) => {
//     if (error) { console.log(error) }
//     console.log("File changed")
// })

// directiories
// fs.mkdir("./componentss", (error) => { console.log(error) });

// if (!fs.existsSync("./compo")) {
//     fs.mkdir("./compo", () => { })
// }

if (fs.existsSync("./docs/deleteme.txt")) {
    fs.unlink("./docs/deleteme.txt", () => { }) // delete files
}