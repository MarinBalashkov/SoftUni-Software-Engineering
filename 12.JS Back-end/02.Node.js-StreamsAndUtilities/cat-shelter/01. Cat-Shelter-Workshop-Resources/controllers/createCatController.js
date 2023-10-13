const fs = require('fs/promises');
const formidable = require('formidable');
const {addItem} = require('../util/database')


module.exports = (req, res) => {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
        addItem(fields);
        const filePath = files['upload'].path;
        const name = files['upload'].name;
        const targetPath = './uploads/' + name;

        await fs.rename(filePath, targetPath);

        res.writeHead(301, {
            'Location': '/'
        });
        res.end();
    });
};