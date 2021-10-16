function A() {
    let myVarA = 5;

    return B;

    function B() {
        let myVarB = 6;
        console.log('inside my b', myVarB, myVarA);
    }
}

let functionB = A();
functionB();

/*function A() {
    let myVarA = 5;
    B();
    console.log('inside my A', myVarA);
}

function B() {
    let myVarB = 6;
    C();
    console.log('inside my b', myVarB);
}

function C() {
    let myVarC = 7;
    console.log('inside my c', myVarC);
}

A();*/
