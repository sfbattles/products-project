////@ts-check
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
exports.getProduct = (req, resp, next) => {
    const productId = req.params.productId
    Product.findProductByID(productId, product => {
        resp.render('shop/product-detail', {
            product : product, //right mean projuct we found on left side mean product in the view for display
            path: 'product',
            pageTitle: product.title,
        });
    })
    
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