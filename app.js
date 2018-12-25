const express = require('express');
const morgan = require('morgan');
const routerProducts = require('./api/routes/products');
const routerOrders = require('./api/routes/orders');

const app = express();

app.use(morgan('dev'));

app.use('/products', routerProducts);
app.use('/orders', routerOrders);

app.use((req, res, next) => {
    const error = new Error('Not found!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;