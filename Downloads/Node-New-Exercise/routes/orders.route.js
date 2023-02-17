const router = require('express').Router();
const db = require('../config/dbconfig');

router.get('/', (req, res) => {
    res.status(200);
    res.json({
        message : 'Welcome to My Orders Site'
    })
})

module.exports = router;