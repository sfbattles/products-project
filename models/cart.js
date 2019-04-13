const fs = require('fs');
const path = require('path')
const rootDir = require('../util/path')

const p = path.join(rootDir,
    'data',
    'cart.json'
); 
 
// module.exports = class Cart {
//     static addProduct(id, productPrice) {
//       // Fetch the previous cart
//       fs.readFile(p, (err, fileContent) => {
//         let cart = { products: [], totalPrice: 0 };
//         if (!err) {
//           cart = JSON.parse(fileContent);
//         }
//         // Analyze the cart => Find existing product
//         const existingProductIndex = cart.products.findIndex(
//           prod => prod.id === id
//         );
//         const existingProduct = cart.products[existingProductIndex];
//         let updatedProduct;
//         // Add new product/ increase quantity
//         if (existingProduct) {
//           updatedProduct = { ...existingProduct };
//           updatedProduct.qty = updatedProduct.qty + 1;
//           cart.products = [...cart.products];
//           cart.products[existingProductIndex] = updatedProduct;
//         } else {
//           updatedProduct = { id: id, qty: 1 };
//           cart.products = [...cart.products, updatedProduct];
//         }
//         cart.totalPrice = cart.totalPrice + +pro  ductPrice;
//         fs.writeFile(p, JSON.stringify(cart), err => {
//           console.log(err);
//         });
//       });
//     }
//   };
  


module.exports = class chart {
    static addProduct(productId, productPrice) {
        // Fetch the previous cart
        fs.readFile(p, (error, fileContent) => {
            let cart = {
                products: [],
                totalPrice: 0
            }
            if (!error) {
                cart = JSON.parse(fileContent)                
            }
            console.log(cart.products);
            //analyze the chart to find if product exits
          
              const existingProductIndex = cart.products.findIndex((product) => {
                return product.id === productId  
            })
        
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct
            if (existingProduct) {
                updatedProduct = {
                    ...existingProduct
                }; //add all values to updated Product
                updatedProduct.qty = updatedProduct.qty + 1
                cart.products = [...cart.products]
                cart.products[existingProductIndex] = updatedProduct
            } else {
                updatedProduct = {
                    id: productId,
                    qty: 1
                }
                cart.products = [...cart.products, updatedProduct]
            }
            cart.totalPrice += +productPrice //the plus sign converted productPrice to number
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log("Error", error)
            })
        })
    }
}