function Person(name) {
    this.name = name
}

Person.prototype.sayHi = function () {
    console.log(`${this.name} say hi !!`);
}

function Employee(name, salary) {
    Person.call(this, name);
    this.salary = salary;
}


Employee.prototype = Object.create(Person.prototype);
Employee.prototype.collectSalary = function () {
    console.log(`${this.name} ${this.salary}`);
}

const myEmployee = new Employee('Jhon', 1600);

console.log(myEmployee);
myEmployee.sayHi();
myEmployee.collectSalary();


