//@ts-check
const Product = require('../models/product');


exports.getAddProduct = (req, resp, next) => {
    resp.render('admin/add-product', {
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
    Product.fetchAll(products => {
        resp.render('admin/products', {
            prods: products,
            path: '/admin/products',
            pageTitle: 'Admin Products',
        }); //no need for pug here its a default engine.
    });
}