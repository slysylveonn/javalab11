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
    static applyDiscount(products, discount) {                        //loops through array of products and applies discount
        products.array.forEach(product => {
            product.price - +product.price * discount;
            
        });
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
}

class Store {                      //initializing store class with inventory array
    constructor() {
        this.inventory = [];
    }


addProduct(product) {
    this.inventory.push(product);                            //method to add product to inventory array
    }
getInventoryValue() {
    let inventoryValue = 0;
    for (i = 0; i < this.inventory.length; i++) {                    //method to iterate through inventory array and calculate total value
    inventoryValue += this.inventory[i];
    }
    return inventoryValue;
    }
    findProductByName(name) {
        for (i in this.inventory) {
            if (i === name) {
                return name;
            } else {
                name === null;
                return name;
            }
        }


    }
};


const apple = new ProductProperties('apple', 2.00, 5);
const milk = new PerishableProductProperties('milk', 4.50, 3, 'feb 13, 2025');
const eggs = new PerishableProductProperties('eggs', 5.00, 20, 'march 2, 2025'); 

console.log(apple.getTotalValue());
console.log(milk.toString());
