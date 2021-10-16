function paw(num, paw) {
    return num ** paw;
}

function sqr(num){
    return paw(num, 2);
}

console.log(paw(1, 2));
console.log(paw(2, 2));
console.log(paw(3, 2));
console.log(paw(4, 2));
console.log(paw(5, 2));

console.log(sqr(1));
console.log(sqr(2));
console.log(sqr(3));
console.log(sqr(4));
console.log(sqr(5));

function paw(paw, num) {
    return num ** paw;
}

let sqrt = paw.bind(null, 2);
console.log(sqrt(1));
console.log(sqrt(2));
console.log(sqrt(3));
console.log(sqrt(4));
console.log(sqrt(5));
