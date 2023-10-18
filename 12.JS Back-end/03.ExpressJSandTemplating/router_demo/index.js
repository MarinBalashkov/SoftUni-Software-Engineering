const express = require('express');
const path = require('path');
const catalogRouter = require('./catalogController');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello express!');
});

app.use('/catalog', catalogRouter);

app.all('/about_old', (req, res) => {
    res.redirect('/about');
});

app.all('/about', (req, res) => {
    res.send('matching all HTTP methods >>>' + req.method);
});

app.all('/download', (req, res) => {
    res.download(path.resolve(__dirname + '/demo.pdf'));
});

app.all('/sendFile', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/demo.pdf'));
});

app.all('/json', (req, res) => {
    res.json({ name: 'marin', age: 35 });
});

app.all('*', (req, res) => {
    res.status(404).send('matching all paths - Not fond page!');
});


app.listen(port, () => { console.log('server listening on port', port) });

