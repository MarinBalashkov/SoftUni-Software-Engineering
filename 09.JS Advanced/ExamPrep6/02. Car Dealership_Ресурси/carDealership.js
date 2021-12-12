class CarDealership {
    constructor(name) {
        this.name = name;
        this.totalIncome = 0;
        this.availableCars = [];
        this.soldCars = [];
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' || !Number.isInteger(Number(horsepower)) && Number(horsepower) < 0 || Number(price) < 0 || mileage < 0) {
            throw Error('Invalid input!');
        }

        const car = {
            model,
            horsepower: Number(horsepower),
            price: Number(price),
            mileage: Number(mileage),
        };

        this.availableCars.push(car)

        return `New car added: ${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        desiredMileage = Number(desiredMileage);

        const car = this.availableCars.find(x => x.model.toLowerCase() === model.toLowerCase());
        const carIndex = this.availableCars.indexOf(car);
        if (car == undefined) {
            throw new Error(`${model} was not found!`)
        }

        const difference = car.mileage - desiredMileage;
        if (difference > 0 && difference <= 40000) {
            car.price -= (car.price * 5) / 100;
        } else if (difference > 40000) {
            car.price -= (car.price * 10) / 100;
        }

        this.soldCars.push({
            model,
            horsepower: car.horsepower,
            soldPrice: car.price
        });

        this.totalIncome += car.price;
        this.availableCars.splice(carIndex, 1);

        return `${model} was sold for ${car.price.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return `There are no available cars`;
        }

        const stringArray = [];
        stringArray.push('-Available cars:');
        this.availableCars.forEach(x => {
            stringArray.push(`---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`);
        });

        return stringArray.join('\n')
    }

    salesReport (criteria) {
        const sortCriterion = {
            'horsepower': (a, b) => b.horsepower - a.horsepower,
            'model': (a, b) => a.model.localeCompare(b.model),
        };

        if (sortCriterion[criteria] == undefined) {
            return `Invalid criteria!`;
        }

        this.soldCars.sort(sortCriterion[criteria]);

        const result = [];

        result.push(`--${this.name} has a total income of the ${this.totalIncome.toFixed(2)}`);
        result.push(`--${this.soldCars.length} cars sold:`);
        this.soldCars.forEach(x => {
            result.push(`---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`);
        });

        return result.join('\n');
    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// // New car added: Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// // New car added: Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// // Uncaught Error Error: Invalid input!


// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// // Toyota Corolla was sold for 3500.00$
// // Mercedes C63 was sold for 26100.00$


// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

// // -Available cars:
// // ---Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// // ---Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// // ---Audi A3 - 120 HP - 240000.00 km - 4900.00$


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

// -SoftAuto has a total income of 29600.00$
// -2 cars sold:
// ---Mercedes C63 - 300 HP - 26100.00$
// ---Toyota Corolla - 100 HP - 3500.00$

