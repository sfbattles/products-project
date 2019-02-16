//@ts-check
const path = require('path')
const express = require('express')

const rootDir = require('../util/path')

const router = express.Router();

const products = [];
console.log("I am in here")

router.get('/add-product', (req, resp, next) => {
  resp.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

router.post('/add-product', (req, resp, next) => {
  products.push({
    title: req.body.title
  });
  resp.redirect('/');
});

// exports.routes = router;   //you added a function to the empty object called routes and set 
//                            //set it = to the router.  and in app.js since you are returning an
//                            //object which has both routes and products.  this is the reason you have to
//                            //change the exports from modules.exports to have the more then one exports.
// exports.products = products;  the code below is the same as here

module.exports = {
  routes: router,
  products: products
};