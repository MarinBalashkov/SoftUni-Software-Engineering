const fs = require('fs/promises');
const uniqid = require('uniqid');
let data = {};

async function init() {
    try {
        data = JSON.parse(await fs.readFile('./models/database.json'));
    } catch (err) {
        console.log('Error reading database');
    }

    return (req, res, next) => {
        req.storage = {
            getAll
        };

        next();
    }
}

async function getAll() {
    return Object.entries(data).map(([id, v]) => Object.assign({}, { id }, v));
}

async function getById() {
    const cube = data[id];

    if (cube) {
        return cube;
    }else {
        return undefined;
    }
}

async function create(cube) {
    const id = uniqid();
    data[id] = cube;

    try {
        await fs.writeFile('./models/database.json', JSON.stringify(data, null, 2));
        console.log('>>>  created new entity');
    } catch (error) {
        console.error('Error writhing new entity');
    }
}

module.exports = {
    init, 
    getAll, 
    getById, 
    create
};