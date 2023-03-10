const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8000;
const router = require('./controllers/dbcontrollers')

const app = express();
app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8081')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
});

const { errorHandling } = require("./middleware/ErrorHandling");


app.use(router);
app.use(
    cors(),
    express.json(),
express.urlencoded({ extended: true}));


app.listen(port, (req, res) => {
    console.log(`you are connected on port ${port}`);
    console.log("click here http://localhost:8000");
})

app.use(errorHandling);
