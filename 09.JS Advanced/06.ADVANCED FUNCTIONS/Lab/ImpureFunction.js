let number = 5;

function impure(a) { // depend on other state
    number += a;
    return number;
}


function pure(a, b) { // depend on other state
    return a + b;;
}

impure(2);
impure(2);
impure(2);
impure(2);
impure(2);
impure(2);
impure(2);
impure(2);

pure(1 + 2);
pure(1 + 2);
pure(1 + 2);
pure(1 + 2);
pure(1 + 2);

