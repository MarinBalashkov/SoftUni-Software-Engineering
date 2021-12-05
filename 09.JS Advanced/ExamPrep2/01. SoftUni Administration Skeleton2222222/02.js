class Parking {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity == this.vehicles.length) {
            throw new Error("Not enough parking space.");
        }

        this.vehicles.push({ carModel, carNumber, payed: false });
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber) {
        const carIndex = this.vehicles.findIndex(x => x.carNumber == carNumber);
        if (carIndex == -1) {
            throw new Error("The car, you're looking for, is not found.");
        }

        if (this.vehicles[carIndex].payed == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        this.vehicles.splice(carIndex, 1);
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        const currentCar = this.vehicles.find(x => x.carNumber == carNumber);
        if (currentCar == undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if (currentCar.payed == true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        currentCar.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        if (carNumber == undefined) {
            const vehiclesString = this.vehicles
                                            .sort((a, b) => a.carModel.localeCompare(b.carModel))
                                            .map(x => `${x.carModel} == ${x.carNumber} - ${x.payed ? 'Has payed' : 'Not payed'}`)
                                            .join('\n')
            
            return `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.\n${vehiclesString}`;
        }

        const currentCar = this.vehicles.find(x => x.carNumber == carNumber);
        if (currentCar == undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        return `${currentCar.carModel} == ${currentCar.carNumber} - ${currentCar.payed ? 'Has payed' : 'Not payed'}`
    }
}



const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
