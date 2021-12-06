class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
        this.spots = 0;
    }

    addCar(carModel, carNumber) {
        if ((this.spots + 1) > this.capacity) {
            throw new Error('Not enough parking space.');
        }

        this.vehicles.push({
            carModel,
            carNumber,
            payed: false
        });
        this.spots++;

        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber) {
        const car = this.vehicles.find(x => x.carNumber === carNumber);
        if (!car) {
            throw new Error(`The car, you're looking for, is not found.`);
        }

        if (car.payed == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        this.vehicles.filter(x => x.carNumber !== carNumber);
        this.spots--;
        return `${carNumber} left the parking lot.`
    }

    pay(carNumber) {
        const car = this.vehicles.find(x => x.carNumber === carNumber);
        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if (car.payed == true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {
        let result = [];
        if (carNumber === undefined) {
            result.push(`The Parking Lot has ${this.capacity - this.spots} empty spots left.`);
            this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            this.vehicles.forEach(x => {
                result.push(`${x.carModel} == ${x.carNumber} - ${x.payed ? 'Has payed' : 'Not payed'}`);
            })
        } else {
            const car = this.vehicles.find(x => x.carNumber === carNumber);
            if (car) {
                result.push(`${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`);
            }
        }

        function carIsIntheLot(car) {
            if (car istace of Object ) {
                return tru
            }
        }

        return result.join('\n');
    }
}




const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

