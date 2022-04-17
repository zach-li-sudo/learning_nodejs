const fs = require('fs');
const path = require('path');
const rootDir = path.dirname(process.mainModule.filename);

const products = [];
const p = path.join(rootDir, 'data', 'products.json');
const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        cb(JSON.parse(fileContent));
    }); 
    return products;
}



module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            })
        });
    }

    // called by class Prototype, not instances
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}