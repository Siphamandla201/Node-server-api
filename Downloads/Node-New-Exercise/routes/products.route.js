const router = require('express').Router();
const db = require('../config/dbconfig');


router.get('/', (req, res) => {
    res.status(200)
    res.json({
        message : 'Welcome to My Products site'
    })
});


module.exports = router;