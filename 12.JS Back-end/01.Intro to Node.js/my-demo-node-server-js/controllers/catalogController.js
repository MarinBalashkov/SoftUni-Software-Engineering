const { layout, render, loadTemplate } = require('../util/template');

module.exports = async (req, res) => {
    const catalogPage = await loadTemplate('catalog');
    res.write(await layout(catalogPage, 'Catalog'));
    res.end();
};