const express = require('express');
const router = express.Router();

router.get('/' , (req, res, next) => {
    res.status(200).json({
        message: 'Testing the GET request of the /orders'
    });
});

router.post('/' , (req, res, next) => {
    res.status(200).json({
        message: 'Testing the POST request of the /orders'
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: 'Get single order.',
        id
    });
});

router.patch('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: 'Update single order.',
        id
    });
});

router.delete('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: 'Delete single order.',
        id
    });
});

module.exports = router;