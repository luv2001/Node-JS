const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use('/', require("./routes/routes"))

app.use(express.json())


app.listen(port, () => {
    console.log(`It's alive on http://localhost:${port}`);
})