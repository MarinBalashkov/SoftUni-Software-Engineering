const { loadTemplate, layout } = require('../util/template');


module.exports = async (req, res) => {
    const addBreed = await loadTemplate('addBreed');
    res.write(await layout(addBreed));
    res.end();
};