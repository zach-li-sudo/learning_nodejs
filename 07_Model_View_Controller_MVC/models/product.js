const products = [];

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        products.push(this);
    }

    // called by class Prototype, not instances
    static fetchAll() {
        return products;
    }
}