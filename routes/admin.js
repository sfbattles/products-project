//@ts-check
const path = require('path');
const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();
// /admin/add=product
router.get('/add-product', adminController.getAddProduct);
// /admin/products
router.get('/products',adminController.getProducts );

router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product:productId',adminController.getEditProduct );

module.exports = router;