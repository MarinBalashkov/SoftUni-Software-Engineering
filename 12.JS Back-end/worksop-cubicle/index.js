const express = require('express');
const { engine } = require('express-handlebars');



const { home } = require('./controllers/home');
const { create, post: postCreate } = require('./controllers/create');
const {about} = require('./controllers/about');
const {details} = require('./controllers/details');
const { notFound } = require('./controllers/notFound');
const { init: storage } = require('./models/storage');


start();

async function start() {
    const port = 3000;
    const app = express();

    app.engine('hbs', engine({
        extname: '.hbs',
    }));

    app.set('view engine', 'hbs');
    app.use('/static', express.static('static'));
    app.use('/js', express.static('js'));
    app.use(express.urlencoded({ extended: false }));
    app.use( await storage());

    app.get('/', home);
    app.get('/about', about);
    app.get('/details/:id', details);
    app.get('/products/create', create);
    app.post('/products/create', postCreate);

    // TODO add edit page
    app.all('*', notFound);


    app.listen(port, () => console.log(`Server listening on port ${port}`));
}