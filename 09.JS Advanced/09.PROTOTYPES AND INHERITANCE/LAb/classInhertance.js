class Person{
    constructor(name){
        this.name = name
    }

    sayHi(){
        console.log(`${this.name} says hi !`)
    }
}

class Employee extends Person {
    constructor(name, salary){
        super(name)
        this.salary = salary;
        
    }

    collectSalary() {
        console.log(`${this.name}, ${this.sayHi}`);
        this.sayHi()
    }
}