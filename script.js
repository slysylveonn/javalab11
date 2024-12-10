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
class PerishableProductProperties extends ProductProperties {              //subclass of ProductProperties
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);                    //calls parameters of parent class into subclass
        this.expirationDate = expirationDate;            //additional parameter novel to subclass
    }
    toString() {
        console.log(`Name: ${this.name} 
        \nPrice: ${this.price} 
        \nQuantity: ${this.quantity}
        \nExpiration Date: ${this.expirationDate}`);
    }
};