//@ts-check
const path = require('path');   //help with location of html files
const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/',shopController.getIndex);

router.get('/products',shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/checkout',shopController.getCheckout);


module.exports = router;