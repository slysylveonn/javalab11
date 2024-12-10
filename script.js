class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotalValue() {
        let value = this.price * this.quantity;
        return value;
    }
    toString() {
        console.log(`Name: ${this.name} 
        \nPrice: ${this.price} 
        \nQuantity: ${this.quantity}`);
    }

}
