const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path.js');

const p = path.join(rootDir,
  'data',
  'product.json'
  );

const getProductsFromFile = (callBack) => {  
  fs.readFile(p, (err, fileContent) => {
      if (err) {
       callBack([]);
      } else {
     callBack(JSON.parse(fileContent));  
      }
   }); 
};

module.exports = class Product {
    constructor(thetitle,imageUrl,description, price) {
        this.title = thetitle;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
   save () {
     getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p,JSON.stringify(products),(err)=> {
        console.log(err);
      });
    });
   }
   //The static keyword defines a static method for a class. 
   //Static methods aren't called on instances of the class. 
   //Instead, they're called on the class itself. These are 
   //often utility functions, such as functions to create or 
   //clone objects.

   static fetchAll(callBack) {  
      getProductsFromFile(callBack);
   }
  };