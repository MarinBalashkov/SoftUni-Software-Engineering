const myObj = {
    firstName: 'Marin',
    lastName: 'Balashkov',
    name: 'peter',
    age: 27,
    hairColor: 'brown',
    sayHi() {
        console.log('Hi!')
    },
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
};

console.log(myObj.age);

myObj.age = 24;

const propName = 'age';

console.log(myObj[propName]);

myObj.lastName = 'Ivanov';

myObj['hight'] = 175;

delete myObj.hairColor;
delete myObj['age'];

let { age: myAge, name } = myObj;
console.log(myAge);
console.log(name);



const myAssocArr = {
    'first': 4,
    'second': 5,
    'third': 3,
};

const keys = Object.keys(myAssocArr);
const values = Object.values(myAssocArr);
const entries = Object.entries(myAssocArr);

for (const key of keys) {
    console.log(key);
}

for (const entry of entries) {
    console.log(entry)
}

for (const [key, value] of entries) {
    console.log(key);
    console.log(value);
}

console.log(myObj.sayHi());// можем да запазим фукцията в променлива да копираме референциата и да я използваме накъде другаде
const sayHi = myObj.sayHi;
console.log(sayHi());

console.log(myObj.fullName());
const fullName = myObj.fullName;// нама да работи защото семе откачили функцията от контекста и this не сочи вече към myObj
console.log(fullName());

const person = {
    fistName: 'bob',
    lastName: 'Latinov',
}

person.fullName = fullName;// така може да споделим функцията от един обект на друг.правим копие на рефернцията 
//няма () зашото копираме рефернция, а не искаме да изпълним функцията.
console.log(person.fullName())


function deepCopy(target) {
    if (Array.isArray(target)) {
        return target.map(deepCopy);
    } else if (typeof target == 'object') {
        return [...Object.entries(target)].reduce((a, [k, v]) => Object.assign(a, { [k]: deepCopy(v) }), {});
    } else {
        return target;
    }


}
