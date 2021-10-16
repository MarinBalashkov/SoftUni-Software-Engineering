function getGreetFunc() {

    function sayHello() {
        console.log('Hi marin')
    }

    return sayHello
}

const returnFunctiuon = getGreetFunc();
returnFunctiuon();