'use strict'
const myCollection = {};

Object.defineProperty(myCollection, 'size', {
    enumerable: false,
    get: function() {
        return Object.keys(this).length;
    }
})

myCollection['Jhon'] = +'14165465465416354';
myCollection['Peter'] = '+14165466586';
myCollection['Ivan'] = '+14165465465698796';

console.log(myCollection.size);

for (const key in myCollection) {
    console.log(key, myCollection[key])
}

Object.defineProperty(myCollection, 'firstName', {
    value: 'List',
    writable: true
});


const myObj = {};

Object.defineProperty(myObj, '_name', {value: 'George', enumerable: false, writable: true});
Object.defineProperty(myObj, 'name', {
    get() {
        return this._name;
    },
    set(value){
        this._name = value
    },
    enumerable: true,
    configurable: false
});

delete myObj.name



const myObject = {
    location: {lat: 43, lon: 422}
}

Object.defineProperty(myObject, 'lat', {
    get(){
        return this.location.lat;
    }
})


