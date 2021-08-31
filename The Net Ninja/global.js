// console.log(global)

// global.setTimeout(() => {
//     console.log(` Hello Bhai kese ho `)
// }, 3000)

setTimeout(() => {
    clearInterval(levi);
}, 3000)

const levi = setInterval(() => {
    console.log("Levi Achraman")
}, 500)