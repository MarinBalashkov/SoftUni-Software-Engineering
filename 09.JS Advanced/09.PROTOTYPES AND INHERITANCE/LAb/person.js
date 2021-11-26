function Perso(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    Object.defineProperty(this, 'fullname', {
        enumerable: true,
        get: function () { 
            return `${this.firstname} ${this.lastname}`;
        },
        set: function (value) {
            [this.firstname, this.lastname] = value.split(' ');
        }
    })
}


Perso.prototype.write = function (message) {
    console.log(`${this.firstname} ${this.lastname}`);
};

const myPerson = new Perso('Jhon', 'Abbot');
const myOtherPerson = new Perso('Mike', 'Stone');

const myProto = {
    write(message) {

    }
}



function newOperator(constructor, ...params) {
    const result = Object.create(Perso.prototype);

    constructor.applpy(result, params);

    return result;
}
