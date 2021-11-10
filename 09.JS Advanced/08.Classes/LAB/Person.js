class Person {
    constructor(firstname, lastname, age, email){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.email =email
    }

    toString(){
        return `${this.firstname}, ${this.lastname} age: ${this.age} email: ${this.email}`;
    }
}

const myPerson = new Person('Marin', 'Balashkov', 32, 'balashkov@abv.bg');




const myliteral = createPerson('Marin', 'Balashkov', 32, 'balashkov@abv.bg');
function createPerson(firstname, lastname, age, email) {
    return ({firstname, lastname, age, email})
}
myliteral.toString = myPerson.toString




console.log(myPerson)
console.log(myliteral);
console.log('' + myPerson)
console.log(`${myPerson}`)



const myEmptyPerson = new Person()
console.log(myEmptyPerson);
Object.assign(myEmptyPerson, myliteral);
console.log(myEmptyPerson);



