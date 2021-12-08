class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.listOfParticipants.find(x => x.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`;
        }


        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        const firstParticipant = this.listOfParticipants.find(x => x.name == name);
        if (firstParticipant == undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants = this.listOfParticipants.filter(x => x.name != name);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        const firstParticipant = this.listOfParticipants.find(x => x.name == participant1);
        if (firstParticipant == undefined) {
            throw new Error(`Invalid entered name/s.`);
        }

        if (typeOfGame == 'WaterBalloonFights') {
            const secondParticipant = this.listOfParticipants.find(x => x.name == participant2);
            if (secondParticipant == undefined) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (secondParticipant.condition !== firstParticipant.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (firstParticipant.power == secondParticipant.power) {
                return `There is no winner.`
            } else if (firstParticipant.power > secondParticipant.power) {
                firstParticipant.wins++;
                return `The ${firstParticipant.name} is winner in the game WaterBalloonFights.`;
            } else {
                secondParticipant.wins++;
                return `The ${secondParticipant.name} is winner in the game WaterBalloonFights.`;
            }

        } else if (typeOfGame == 'Battleship') {
            firstParticipant.power += 20;
            return `The ${firstParticipant.name} successfully completed the game Battleship.`;
        }

    }

    toString() {
        let string = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
        let secondString = this.listOfParticipants.sort((a, b) => b.wins - a.wins).map(x => `${x.name} - ${x.condition} - ${x.power} - ${x.wins}`).join('\n');
        return string + secondString;
    }
}










// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));



// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// //console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.toString());


