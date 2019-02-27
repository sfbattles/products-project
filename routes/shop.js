//@ts-check
const path = require('path');   //help with location of html files
const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/',productsController.getProducts);

module.exports = router;