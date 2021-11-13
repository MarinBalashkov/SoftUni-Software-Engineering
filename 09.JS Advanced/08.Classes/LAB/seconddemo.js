class MyClass{
    constructor(){
        this.name = 'Static Class'
    }

    static MystaticMethod(){
        console.log('from static method', this)
    }
}

MyClass.staticName = 'Jhon';
MyClass.MystaticMethod();

const myInstance = new MyClass();

console.log(myInstance);