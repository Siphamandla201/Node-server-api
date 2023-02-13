const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json ({
        message: 'Order were found'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json ({
        message: 'Order were found'
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json ({
        message: 'OrderID found',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json ({
        message: 'Order deleted',
        orderId: req.params.orderId
    });
});

module.exports = router;