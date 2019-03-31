//@ts-check
const Product = require('../models/product');

exports.getProducts = (req, resp, next) => {
    Product.fetchAll(products => {
        resp.render('shop/product-list', {
            prods: products,
            path: '/products',
            pageTitle: 'All Products',
        }); //no need for pug here its a default engine.
    });   
};

exports.getIndex = (req, resp, next) => {
    Product.fetchAll(products => {
        resp.render('shop/index', {
            prods: products,
            path: '/',
            pageTitle: 'Shop',
        }); //no need for pug here its a default engine.
    }); 
}

exports.getCart  = (req, resp, next) => {
 resp.render('shop/cart', {
   path: '/cart', 
   pageTitle: 'Your Cart', 
 });
};
exports.getOrders  = (req, resp, next) => {
    resp.render('shop/orders', {
      path: '/orders', 
      pageTitle: 'Your Orders', 
    });
   };

exports.getCheckout  = (req, resp, next) => {
    resp.render('shop/checkout', {
      path: '/checkout', 
      pageTitle: 'Checkout', 
    });
   };