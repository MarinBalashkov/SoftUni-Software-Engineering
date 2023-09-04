const fs = require('fs/promises');

async function loadTemplate(name) {
    try {
        const template = await fs.readFile(`../views/${name}.html`);
        return template.toString();
    } catch (error) {
        return  '';
    }
}

async function layout(body, title = 'Welcome') {
    return await render('layout', {title, body});
}

async function render(name, context = {}) {
    let result = await loadTemplate(name);
    const props = Object.keys(context);

    for (const prop of props) {
        result = result.replace(new RegExp(`{{${prop}}}`, 'g'), context[prop])
    }

    return result;
}

module.exports = {
    render, 
    loadTemplate, 
    layout, 
};
