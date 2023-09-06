const { database } = require('../util/database');
const parseForm = require('../util/formParser');

module.exports = async (req, res) => {
    const body = await parseForm(req);
    database.addItem(body);
    res.writeHead(301, {
        'Location': '/catalog'
    });
    res.end();
};
