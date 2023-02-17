const express = require('express');
let db = require('./config/dbconfig');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8180;

const app = express();

const corsOptions = {
    origin : 'http://localhost:8180'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.status(200)
    res.json({
        message : 'Welcome to My site'
    })
});
const productRoutes = require('./routes/products.route');
const userRoutes = require('./routes/users.route');
const ordersRoutes = require('./routes/orders.route');
const categoriesRoutes = require('./routes/categories.route');
 
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', ordersRoutes);
app.use('/categories', categoriesRoutes);


app.listen(port, () => {
    console.log('Server is running at ' + port)
});
