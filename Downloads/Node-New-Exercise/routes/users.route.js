const router = require('express').Router();
const bodyParser = require('body-parser');
const db = require('../config/dbconfig');

router.get('/', (req,res) => {
    res.status(200);
    res.json({
        message : 'Welcome to Users Site'
    });
});

router.get('/', (req,res) => {
    res.status(200);
    res.json({
        message : 'Welcome User'
    });
});

router.post('/',  bodyParser.json(), (req,res) => {
    res.status(200);
    res.json({
        message : 'Post successful'
    });
});

// router.put('/',  bodyParser.json(), (req,res) => {
//     res.status(200);
//     res.json({
//         message : 'Update successful'
//     });
// });

router.put('/:id',  bodyParser.json(), (req,res) => {
    res.status(200);
    res.json({
        message : 'Update Item successful'
    });
});

router.delete('/',  bodyParser.json(), (req,res) => {
    res.status(200);
    res.json({
        message : 'Delete successful'
    });
});

router.delete('/:id',  bodyParser.json(), (req,res) => {
    res.status(200);
    res.json({
        message : 'Item Deleted successfully'
    });
});

module.exports = router;