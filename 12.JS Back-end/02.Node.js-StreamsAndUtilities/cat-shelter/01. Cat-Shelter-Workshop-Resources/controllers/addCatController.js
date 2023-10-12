const { render, layout } = require('../util/template');
const {breeds} = require('../util/database')


module.exports = async (req, res) => {
    const addCat = await render('addCat' , {
        options: breeds.map((x) => `<option value="${x.breed}">${x.breed}</option>`).join('')
    });
    res.write(await layout(addCat));
    res.end();
};