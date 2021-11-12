class myClass {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(`${this.name} says hi `)
    }
};

class myNextClass {
    constructor(...params){
        if (params.length == 1) {
            throw new Error('sdadasd');
        }

        this.name = name;
    }
};

const myiteral = {
    name: 'Peter'
}

const myInstance = new myClass('Peter');
const otherInstance = new myClass('Jhon');
myInstance.sayHi();

const myFunc = myInstance.sayHi.bind(otherInstance);

myFunc();


console.log(myInstance)
