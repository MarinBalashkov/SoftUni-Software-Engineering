const parseForm = require('../util/formParser');
const {addBreed} = require('../util/database');

module.exports = async (req, res) => {
    const body = await parseForm(req);

    console.log('created item');

    addBreed(body);

    res.writeHead(301, {
        'Location': '/'
    });
    res.end();
};