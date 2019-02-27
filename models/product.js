const products = [];

module.exports = class Product {
    constructor(thetitle) {
        this.title = thetitle;
    }
   save () {
    products.push(this)    
   }
   //The static keyword defines a static method for a class. 
   //Static methods aren't called on instances of the class. 
   //Instead, they're called on the class itself. These are 
   //often utility functions, such as functions to create or 
   //clone objects.

   static fetchAll() {    
       return(products);
   }
};