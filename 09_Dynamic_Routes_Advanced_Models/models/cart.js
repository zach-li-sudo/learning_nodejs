const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json',
);

 
module.exports = class Cart {
    static addProduct(id, productPrice) {
        // fetch the previous cart from file
        // analyze the cart => find existing prodcut
        // add new/ increase number for existing
        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0};
            if (!err) {
                cart = JSON.parse(fileContent);
            }

            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];

            let updatedProduct;
            if (existingProduct) {
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
            } else {
                updatedProduct = { id: id, qty: 1};
            }
            cart.totalPrice = cart.totalPrice + productPrice;
        });

        cart.products = [...cart.products];


    }
}