const express = require('express');
const { engine } = require('express-handlebars');

module.exports = (app) => {
    app.engine('hbs', engine({
        extname: '.hbs',
    }));

    app.set('view engine', 'hbs');
    app.use('/static', express.static('static'));
    app.use('/js', express.static('js'));
    app.use(express.urlencoded({ extended: false }));
};