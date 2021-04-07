const { assert } = require('chai');
const StringBuilder = require('./14.js');



describe('StringBuilder tests', () => {
    // let instance = undefined;
    // beforeEach(() => {
    //     instance = new PaymentPackage('Name', 100)
    // })
    it('constructor', () => {
        let instance = new StringBuilder('Name');
        assert.deepEqual(instance.toString(), 'Name');

        let withoutParameterInstance = new StringBuilder();
        assert.deepEqual(withoutParameterInstance._stringArray, []);

        let undefinedInstance = new StringBuilder(undefined);
        assert.deepEqual(undefinedInstance._stringArray, []);

        let notStringInstance = undefined;
        assert.throw(() => {notStringInstance = new StringBuilder(5)}, TypeError, 'Argument must be а string');

        let ArrayParameterInstance = undefined;
        assert.throw(() => {ArrayParameterInstance = new StringBuilder(['a', 'b'])}, TypeError, 'Argument must be а string');
    })

    it('append', () => {
        let instance = new StringBuilder('Name');

        assert.Throw(() => {instance.append(23)}, TypeError, 'Argument must be а string');

        instance.append('is');
        assert.deepEqual(instance.toString(), 'Nameis');

        let secondInstance = new StringBuilder('Name');
        secondInstance.append('i');
        assert.deepEqual(secondInstance.toString(), 'Namei');

        let thirdInstance = new StringBuilder('Name');
        thirdInstance.append('');
        assert.deepEqual(thirdInstance.toString(), 'Name');

    })

    it('insertAt', () => {
        let instance = new StringBuilder('Name');

        assert.throw(() => {instance.insertAt(23)}, TypeError, 'Argument must be а string');

        instance.insertAt('S', 0);
        assert.deepEqual(instance._stringArray, [ 'S', 'N', 'a', 'm', 'e']);

        let secondInstance = new StringBuilder('Name');
        secondInstance.insertAt('S', 1);
        assert.deepEqual(secondInstance._stringArray, [ 'N', 'S', 'a', 'm', 'e']);

        let thirdInstance = new StringBuilder('Name');
        thirdInstance.insertAt('SE', -1);
        assert.deepEqual(thirdInstance._stringArray, [ 'N', 'a', 'm', 'S', 'E', 'e' ]);

        let fourthInstance = new StringBuilder('Name');
        fourthInstance.insertAt('S', 10);
        assert.deepEqual(fourthInstance._stringArray, [ 'N', 'a', 'm', 'e', 'S' ]);
    })

    it('prepend', () => {
        let instance = new StringBuilder('Name');

        assert.throw(() => {instance.prepend(23)}, TypeError, 'Argument must be а string');

        instance.prepend('is');
        assert.deepEqual(instance._stringArray, [ 'i', 's', 'N', 'a', 'm', 'e' ]);

        let secondInstance = new StringBuilder('Name');
        secondInstance.prepend('i');
        assert.deepEqual(secondInstance._stringArray, ['i', 'N', 'a', 'm', 'e' ]);

        let thirdInstance = new StringBuilder('Name');
        thirdInstance.prepend('');
        assert.deepEqual(thirdInstance._stringArray, ['N', 'a', 'm', 'e' ]);


    })

    it('remove', () => {
        let instance = new StringBuilder('Name');
        instance.remove(0, 1);
        assert.deepEqual(instance._stringArray, [ 'a', 'm', 'e' ]);

        let secondInstance = new StringBuilder('Name');
        secondInstance.remove(10, 1);
        assert.deepEqual(secondInstance._stringArray, ['N' ,'a', 'm', 'e' ]);

        let thirdInstance = new StringBuilder('Name');
        thirdInstance.remove(-1, 1);
        assert.deepEqual(thirdInstance._stringArray, ['N' , 'a', 'm' ]);

    })

    it('toString', () => {
        let instance = new StringBuilder('Name');
        assert.equal(instance.toString(), 'Name');

        let enptyInstance = new StringBuilder('');
        assert.equal(enptyInstance.toString(), '');


    })

    it('_vrfyParam', () => {
        assert.throw(() => {StringBuilder._vrfyParam(23)}, TypeError, 'Argument must be а string');


    })
})