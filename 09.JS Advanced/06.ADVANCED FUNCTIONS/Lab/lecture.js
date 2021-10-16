//bind 
const meObj  = {
    name : 'Peter', 
    myMethod(a, b) {
        console.log('me name is' + this.name + a + b);
    }
}

document.querySelector('button').addEventListener('click', myObj.myMethod.bind(myObj));
const boundFunc = myObj.myMethod.bind(myObj, 3, 5); // може да фиксираме аргументите които подаваме освен контекста !! 