function Person(name) {
    this.name = name
}

Person.prototype.sayHi = function () {
    console.log(`${this.name} say hi !!`);
}

function Employee(name, salary) {
    Person.call(this, name);//извикваме горният конструктор в текушия контекст!
    this.salary = salary;
}

const myEmployee1 = new Employee('Jhon', 1600);




const prototype = Object.getPrototypeOf(myEmployee);





Employee.prototype = Object.create(Person.prototype);// правим протипа на емплои да наследи портотипа на Персон като го реферира
Employee.prototype.collectSalary = function () {
    console.log(`${this.name} ${this.salary}`);
}

const myEmployee = new Employee('Jhon', 1600);

console.log(myEmployee);
myEmployee.sayHi();
myEmployee.collectSalary();


