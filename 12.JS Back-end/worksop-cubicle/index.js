const express = require('express');
const { engine } = require('express-handlebars');



const { home } = require('./controllers/home')
const { notFound } = require('./controllers/notFound');
const { init } = require('./models/storage');


start();

async function start() {
    const port = 3000;
    const app = express()

    app.engine('hbs', engine({
        extname: '.hbs',
    }));

    app.set('view engine', 'hbs');
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: false }));
    app.use( await init());

    app.get('/', home);
    app.all('*', notFound);


    app.listen(port, () => console.log(`Server listening on port ${port}`));
}