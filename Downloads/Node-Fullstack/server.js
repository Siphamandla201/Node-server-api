
const http = require('http');
const Port = process.env.PORT || 8081;

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// const db = require('./app/models');
// db.sequelize.sync().then(function(){
//     console.log('DB connection successful.');
//   }, function(err){
//     // catch error here
//     console.log(err);
  
// });

app.get('/', (req, res) => {
    res.json({message : "Welcome James"})
});

require("./app/routes/tutorial.routes.js")(app);

app.listen(Port, () => {
    console.log(`${Port} works `)
});

