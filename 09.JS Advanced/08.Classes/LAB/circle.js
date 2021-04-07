
class Circle {
    constructor(r) {
        this.r = r;
    }

    get diameter() {
        return this.r * 2;
    }

    set diameter(value) {
        if (typeof value != 'number') {
            throw new TypeError('diameter must be a number')
        }
        this.r = value / 2;
    }

    getDiameter() {
        return this.r * 2;
    }

    get area(){//ReadOnly prop
        return this.r ** 2 * Math.PI;
    }
}

const myCircle = new Circle(4);

console.log(myCircle);
console.log(myCircle.r);
console.log(myCircle.diameter);

myCircle.r = 5;
console.log(myCircle.r);
console.log(myCircle.diameter);

myCircle.diameter = 8;
console.log(myCircle.r);

try {
    myCircle.diameter = 'Pesho';
} catch (error) {
    console.log(error.message)
}



console.log('Befor', myCircle.area);
myCircle.area = 30;
console.log('After', myCircle.area);




