function solve(arr) {
    let result = arr
        .map((line) => line.split(' | '))
        .reduce((storage, cars) => {
            let [brand, model, quantity] = cars;
            if (!storage[brand]) {
                storage[brand] = {}
            }

            if (!storage[brand][model]) {
                storage[brand][model] = 0
            }

            storage[brand][model] += Number(quantity);

            return storage
        }, {});

let resultString = [];

for (const [brand, model] of Object.enties(result)){
    let string = `${brand}\n`;
    for (const [name, quantity] of Object.entries(model)) {
        string += `###${}`
    }
}


}