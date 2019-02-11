const path = require('path');   //help with location of html files
const express = require('express');

const rootDir = require('../util/path.js');
const adminData = require ('./admin.js');

const router = express.Router();

router.get('/',(req, resp, next) => {
    console.log('shop.js', adminData.products)

   const products = adminData.products;
   resp.render('shop', {prods: products, docTitle: 'Shop'});  //no need for pug here its a default engine.
 });

 module.exports = router;