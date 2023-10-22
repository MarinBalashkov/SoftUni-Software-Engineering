const express = require('express');
const {engine} = require('express-handlebars');

const app = express();

app.engine('.hbs', engine({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.get('/', (req, res, ) => {
    const ctx = {
        user: {
            username: 'Peter'
        },
        title: 'page-page', 
        name: 'marin', 
        age: 35, 
        items: [
            {
                type:  'Lint', 
                qty: 1
            }, 
            {
                type:  'Wallet', 
                qty: 2
            }, 
            {
                type:  'Bubblegum', 
                qty: 3
            }, 
            {
                type:  'Spare coins', 
                qty: 4
            }, 
        ]
    }

    res.render('home', ctx);
});


app.listen(3000);