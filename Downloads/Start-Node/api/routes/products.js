const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
     res.status(200).json({
        message: 'using GET '
     });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
       message: 'using POST'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'you discovered the id',
            id: id
        });
    }else {
        res.status(200).json({
            message: 'You passed an ID' 
        });
    }
});

router.patch('/:productId', (req, res, next) => {
     res.status(200).json({
      message: 'You updated product' 

    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
     message: 'You deleted product' 

   });
});

module.exports = router;