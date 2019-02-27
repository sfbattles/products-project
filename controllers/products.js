//@ts-check
const Product = require('../models/product');

exports.getAddProduct = (req, resp, next) => {
    resp.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, resp, next) => {
    const product = new Product(req.body.title);
    product.save();
    resp.redirect('/');
};

exports.getProducts = (req, resp, next) => {
    const products = Product.fetchAll();
    resp.render('shop', {
        prods: products,
        path: '/',
        pageTitle: 'Shop for books',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    }); //no need for pug here its a default engine.
};