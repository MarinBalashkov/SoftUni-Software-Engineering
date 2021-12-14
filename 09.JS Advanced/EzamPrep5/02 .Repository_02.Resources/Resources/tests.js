let { Repository } = require("./solution.js");
let { assert } = require('chai');

describe("Tests Repository", function () {
    describe(" ", function () {
        // Initialize props object
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let instance = undefined;
        beforeEach(() => {
            instance = new Repository(properties);
        })
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };



        it('constructor', function () {
            assert.equal(instance.props.name, 'string');
            assert.equal(instance.props.age, 'number');
            assert.equal(instance.nextId(), 0);
            assert.equal(instance.count, 0);
            assert.equal(typeof (instance.data), 'object');

        });

        it('validate', function () {
            assert.throw((() => instance._validate({
                firstName: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            })), `Property name is missing from the entity!`);

            assert.throw((() => instance._validate({
                name: "Pesho",
                ages: 22,
                birthday: new Date(1998, 0, 7)
            })), `Property age is missing from the entity!`);

            assert.throw((() => instance._validate({
                name: "Pesho",
                age: 22,
                myBirthday: new Date(1998, 0, 7)
            })), `Property birthday is missing from the entity!`);

            assert.throw((() => instance._validate({
                name: 10,
                age: 22,
                birthday: new Date(1998, 0, 7)
            })), `Property name is not of correct type!`);

            assert.throw((() => instance._validate({
                name: 'ivan',
                age: '22',
                birthday: new Date(1998, 0, 7)
            })), `Property age is not of correct type!`);

            assert.throw((() => instance._validate({
                name: 'marin',
                age: 22,
                birthday: '1988 04 21'
            })), `Property birthday is not of correct type!`);

        });

        it('add', function () {
            assert.equal(instance.add(entity), 0);
            assert.equal(instance.add(entity), 1);
            assert.deepEqual(instance.getId(0), entity);
            assert.deepEqual(instance.getId(1), entity);
        });

        it('getId', function () {
            assert.equal(instance.add(entity), 0);
            assert.equal(instance.add(entity), 1);

            assert.deepEqual(instance.getId(0), entity);

            assert.throw((() => instance.getId(-5)), `Entity with id: -5 does not exist!`);
            assert.throw((() => instance.getId(3)), `Entity with id: 3 does not exist!`);
            assert.throw((() => instance.getId(100)), `Entity with id: 100 does not exist!`);
            assert.throw((() => instance.getId(5.3)), `Entity with id: 5.3 does not exist!`);


        });

        it('update', function () {
            let newEntity = {
                name: "Ivan",
                age: 33,
                birthday: new Date(1998, 0, 7)
            };

            instance.add(entity);

            assert.throw((() => instance.update(-5)), `Entity with id: -5 does not exist!`);
            assert.throw((() => instance.update(3, newEntity)), `Entity with id: 3 does not exist!`);
            assert.throw((() => instance.update(100, newEntity)), `Entity with id: 100 does not exist!`);
            assert.throw((() => instance.update(5.3, newEntity)), `Entity with id: 5.3 does not exist!`);

            instance.update(0, newEntity);
            assert.deepEqual(instance.getId(0), newEntity);
        });

        it('del', function () {
            instance.add(entity);

            assert.throw((() => instance.del(-5)), `Entity with id: -5 does not exist!`);
            assert.throw((() => instance.del(3)), `Entity with id: 3 does not exist!`);
            assert.throw((() => instance.del(100)), `Entity with id: 100 does not exist!`);
            assert.throw((() => instance.del(5.3)), `Entity with id: 5.3 does not exist!`);

            instance.del(0);
            assert.throw((() => instance.getId(0)), `Entity with id: 0 does not exist!`);
            assert.throw((() => instance.del(0)), `Entity with id: 0 does not exist!`);

            assert.equal(instance.data.size, 0);

        });

    });
    // TODO: …
});
