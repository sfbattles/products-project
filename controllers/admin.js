////@ts-check
const Product = require('../models/product');

exports.getAddProduct = (req, resp, next) => {
    const editMode = req.query.edit
    resp.render('admin/edit-product', {
        pageTitle: 'Add Product',
        editing: editMode,
        path: '/admin/add-product',  //uses for highlighting navigation items
    });
};

exports.postAddProduct = (req, resp, next) => {
    const { title, imageUrl, price, description } = req.body;
    console.log(req.body)
    const product = new Product(title,imageUrl,price,description);
    product.save();
    resp.redirect('/');
};

exports.getEditProduct = (req, resp, next) => {
    console.log('richard')
    const editMode = req.query.edit    //edit is part of the url ex. ?edit=true
    console.log('editMode' + editMode)
    if(!editMode) {
      //return resp.redirect('../page-not-found');
      return resp.send("why")
    }
    const prodId = req.params.productId
    console.log(prodId)
    Product.findProductByID(prodId,(product) => {
        if (!product) {
            return resp.redirect('/');  //should add a display of error
        }
        resp.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',  //uses fro highlighting navigation items
            editing: editMode,
            product: product,
        });
    })

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