const { home } = require('../controllers/home');
const { create, post: postCreate } = require('../controllers/create');
const {about} = require('../controllers/about');
const {details} = require('../controllers/details');
const { notFound } = require('../controllers/notFound');
const { edit } = require('../controllers/edit');

module.exports = (app) => {
    app.get('/', home);
    app.get('/about', about);
    app.get('/products/details/:id', details);
    app.get('/products/edit/:id', edit);
    app.get('/products/create', create);
    app.post('/products/create', postCreate);

    // TODO add edit page
    app.all('*', notFound);
};