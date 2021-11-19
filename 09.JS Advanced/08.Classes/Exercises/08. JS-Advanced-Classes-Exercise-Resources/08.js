function solve(arr) {
    let juices = new Map();
    let finalJuices = new Map();

    arr.forEach(element => {
        let [name, quantity] = element.split(' => ');
        if (!juices.has(name)) {
            juices.set(name, 0)
        }

        const value = juices.get(name); 
        juices.set(name, value + Number(quantity))

        if (juices.get(name) >= 1000) {
            
        }
    });

    let rest = '';
    for (const [key, value] of juices.entries()) {
        let buttols = Math.floor(value / 1000);;
        if (buttols > 0) {
      
            rest += `${key} => ${buttols}\n`
        }
    }

    return rest;

}

function secondSolve(arr){
    let bottles = new Map();
    let juices = {};
 
    for(let juice of arr){
        let [fruit, quantity] = juice.split(' => ');
        quantity = Number(quantity);
 
        if(!juices.hasOwnProperty(fruit)){
            juices[fruit] = 0;
        }
 
        juices[fruit] += quantity;
 
        if(juices[fruit] / 1000 >= 1){
            let bottlesCount = Math.trunc(juices[fruit] / 1000);
            juices[fruit] -= bottlesCount * 1000;
            if(!bottles.has(fruit)){
                bottles.set(fruit, 0)
            }
            bottles.set(fruit, bottles.get(fruit) + bottlesCount);
        }
        
    }
 
    for(let [key, value] of bottles.entries()){
        console.log(key+' => '+value)
    }
}

console.log(solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
));