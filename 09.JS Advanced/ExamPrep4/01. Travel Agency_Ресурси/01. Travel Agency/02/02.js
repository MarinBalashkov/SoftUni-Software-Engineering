class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = Number(budgetMoney);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (const element of products) {
            const [productName, productQuantity, productTotalPrice] = element.split(' ').filter(x => x);
            if (productTotalPrice <= this.budgetMoney) {
                this.budgetMoney -= productTotalPrice;
                if (this.stockProducts[productName] == undefined) {
                    this.stockProducts[productName] = Number(0);
                }

                this.stockProducts[productName] += Number(productQuantity);
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }

        }

        return this.history.join('\n');
    };

    addToMenu(meal, neededProducts, price) {
        const products = neededProducts.map(x => {
            const [productName, productQuantity] = x.split(' ');
            return { productName, productQuantity };
        });

        if (this.menu[meal] == undefined) {
            this.menu[meal] = { products, price: Number(price) };
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        const menuLength = Object.keys(this.menu).length;
        if (menuLength == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else {
            return `Great idea! Now with the ${meal} we have ${menuLength} meals in the menu, other ideas?`;
        }
    };

    showTheMenu() {
        const menuArray = Object.entries(this.menu);
        if (menuArray.length == 0) {
            return 'Our menu is not ready yet, please come later...';
        }

        return menuArray.map(x => {
            const [meal, { products, price }] = x;
            return `${meal} - $ ${price}`;
        }).join('\n');
    };

    makeTheOrder(meal){
        const currentMeal = this.menu[meal];
        if (currentMeal == undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        if (currentMeal.products.some(x => this.stockProducts[x.productName] == undefined || this.stockProducts[x.productName] < x.productQuantity)) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        this.budgetMoney += this.menu[meal].price;
        for (const mealProduct of currentMeal.products) {
            this.stockProducts[mealProduct.productName] -= mealProduct.productQuantity;
        }

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${currentMeal.price}.`;
    };    
};



// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));



// //let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));



// //let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());



let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
