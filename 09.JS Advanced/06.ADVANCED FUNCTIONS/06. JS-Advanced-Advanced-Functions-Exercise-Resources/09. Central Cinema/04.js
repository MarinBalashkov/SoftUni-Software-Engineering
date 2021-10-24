function solution() {
    let stock = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0,
    }
 
    const recepies = {
// •  Apple - made with 1 carb and 2 flavour
        'apple': {'carbohydrate': 1, 'flavour': 2},
// •  Lemonade - made with 10 carb and 20 flavour
        'lemonade':  {'carbohydrate': 10, 'flavour': 20},
// •  Burger - made with 5 carb, 7 fat and 3 flavour
        'burger':  {'carbohydrate': 5, 'fat': 7, 'flavour': 3},
// •  Eggs - made with 5 protein, 1 fat and 1 flavour
        'eggs':  {'protein': 5, 'fat': 1, 'flavour': 1},
// •  Turkey - made with 10 protein, 10 carb, 10 fat and 10 flavour
        'turkey':  {'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10},
    }
 
    function manager() {
        const input = Array.from(arguments);
        const tokens = input[0].split(' ');
        const command = tokens[0];
 
 
       if (command == 'report') {
            report(); 
        }
 
        if (command == 'restock') {
            const ingredient = tokens[1];
            const quantity = Number(tokens[2]);
            restock(ingredient, quantity); 
        }
 
        if (command == 'prepare') {
            const product = tokens[1];
            const quantity = Number(tokens[2]);
            prepare(product, quantity); 
        }
 
        function restock(ingredient, quantity) {
            stock[ingredient] += quantity;
            console.log('Success');
        }
 
        function report() {
            let result = `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
            console.log(result);
        }
 
        function prepare(product, quantity) {
            const foodToPrepare = recepies[product];
            let resultString = '';
 
            for (const ingredient in foodToPrepare) {
                if (foodToPrepare[ingredient] * quantity > stock[ingredient]){
                    resultString = `Error: not enough ${ingredient} in stock`
                    console.log(resultString);
                    return;
                }
            }
 
            for (const ingredient in foodToPrepare) {
                stock[ingredient] -= foodToPrepare[ingredient] * quantity;
            }
 
            resultString = 'Success';
            console.log(resultString);
        }
    }
 
    return manager;
}