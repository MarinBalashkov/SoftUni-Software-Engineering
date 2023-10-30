const express = require('express');
const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');

const { init: storage } = require('./models/storage');


start();

async function start() {
    const port = 3000;
    const app = express();

    expressConfig(app);
    
    try {
        await databaseConfig(app);
        console.log('Promise resolve');
    } catch (err) {
        console.log(err);
        console.log('Promise reject!');
    }

    app.use(await storage());
    routesConfig(app);


    app.listen(port, () => console.log(`Server listening on port ${port}`));
}