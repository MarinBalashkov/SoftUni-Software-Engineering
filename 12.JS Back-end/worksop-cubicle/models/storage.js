// const fs = require('fs/promises');
// const uniqid = require('uniqid');
const Cube = require('./Cube');
const Comment = require('./Comment');

let data = {};

async function init() {
    // try {
    //     data = JSON.parse(await fs.readFile('./models/database.json'));
    // } catch (err) {
    //     console.log('Error reading database');
    // }

    return (req, res, next) => {
        req.storage = {
            getAll,
            create,
            getById,
            update,
        };

        next();
    }
}

async function getAll(query) {
    const options = {};

    if (query.search) {
        options.name = { $regex: query.search, $options: 'i' };
    }

    if (query.from) {
        options.difficulty = { $gte: Number(query.from) };
    }

    if (query.to) {
        options.difficulty = options.difficulty ||  {};
        options.difficulty.$lte = Number(query.to);
    }

    const cubes = Cube.find(options).lean();
    return cubes;

    // return Object.entries(data).map(([id, v]) => Object.assign({}, { id }, v));
}

async function getById(id) {
    const cube = await Cube.findById(id).lean();
    console.log(cube);
    // const cube = data[id];

    if (cube) {
        return cube;
    } else {
        return undefined;
    }
}

async function create(cube) {
    const record = new Cube(cube);
    return record.save();

    // const id = uniqid();
    // data[id] = cube;

    // try {
    //     await fs.writeFile('./models/database.json', JSON.stringify(data, null, 2));
    //     console.log('>>>  created new entity');
    // } catch (error) {
    //     console.error('Error writhing new entity');
    // }
}

async function update(id, cube) {
    const existing = await Cube.findById(id);

    if (!existing) {
        throw new Error('No such Id in database')
    }

    Object.assign(existing, cube);
    return existing.save();
}

module.exports = {
    init,
    getAll,
    getById,
    create, 
    update, 
};