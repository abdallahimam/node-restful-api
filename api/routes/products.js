const express = require('express');
const router = express.Router();

router.get('/' , (req, res, next) => {
    res.status(200).json({
        message: 'Testing the GET request of the /products'
    });
});

router.post('/' , (req, res, next) => {
    res.status(200).json({
        message: 'Testing the POST request of the /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'Get single product.',
        id
    });
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'Update single product.',
        id
    });
});

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'Delete single product.',
        id
    });
});

module.exports = router;