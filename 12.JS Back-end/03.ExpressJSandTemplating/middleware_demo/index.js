const express = require('express');
const path = require('path');
const catalogRouter = require('./catalogController');
const logger = require('./middlewares/logger');
const isAdmin = require('./middlewares/guard');
const error = require('./middlewares/error');

const app = express();
const port = 3000;

app.use(logger);// before all requests

app.use('/static', express.static('static'));
//app.use('/public', express.static('static'));

app.get('/', (req, res) => {
    res.send('Hello express!');
});

app.get('/catalog', logger, (req, res) => {
    res.send('Catalog page!');
});

app.get('/adminPage', isAdmin, (req, res) => {
    res.send('AdminPage');
});

app.use(error);

app.listen(port, () => { console.log('server listening on port', port) });