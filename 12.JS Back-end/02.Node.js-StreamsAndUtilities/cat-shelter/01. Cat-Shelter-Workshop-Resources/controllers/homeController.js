const { render, layout } = require('../util/template');
const {breeds} = require('../util/database')


module.exports = async (req, res) => {
    const homePage = await render('home' , {
        items: breeds.map((x) => `<li ">${x.breed} </li>`).join('')
    });

    res.write(await layout(homePage));
    res.end();
};