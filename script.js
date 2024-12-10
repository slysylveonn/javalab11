class ProductProperties {                                         //parent class
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
        products.forEach(product => {
            product.price -= product.price * discount;
            
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
    for (let i = 0; i < this.inventory.length; i++) {                    //method to iterate through inventory array and calculate total value
    inventoryValue += this.inventory[i].getTotalValue();
    }
    return inventoryValue;
    }
    findProductByName(name) {
        for (let i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i].name === name) {
                return this.inventory[i];
            }
        }
        return null; 
    }
};

//adding objects to class


const tinFoil = new ProductProperties('tin foil', 4.99, 32);
const paperTowel = new ProductProperties('Paper towel', 6.50, 7);
const chickpeas = new ProductProperties('chickpeas', 1.99, 21);
const kraftDinner = new ProductProperties('Kraft Dinner', 3.50, 17);
const chickenLegs = new PerishableProductProperties('Chicken legs', 9.99, 7, 'Dec 31, 2024');
const milk = new PerishableProductProperties('milk', 4.50, 3, 'feb 13, 2025');
const eggs = new PerishableProductProperties('eggs', 5.00, 20, 'march 2, 2025'); 
const apple = new PerishableProductProperties('apple', 2.00, 5, 'jan 2, 2025');


//---------------------------------------------------------------------------//
const store = new Store();                                                  //initializing new store 

store.addProduct(tinFoil);                                                 //adding product objects to Store Inventory array
store.addProduct(paperTowel);
store.addProduct(chickpeas);
store.addProduct(kraftDinner);
store.addProduct(chickenLegs);
store.addProduct(milk);
store.addProduct(eggs);
store.addProduct(apple);


console.log(chickenLegs.getTotalValue());
console.log(milk.toString());

console.log(store.findProductByName('chickpeas'));


console.log(`Total price before discount: ${store.getInventoryValue().toFixed(2)}`);                  //logging inventory price before discount applied
ProductProperties.applyDiscount(store.inventory, 0.15);                                               //applying given discount to inventory array
console.log(`Total price after discount: ${store.getInventoryValue().toFixed(2)}`);                                 //logging discounted items