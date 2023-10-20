import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan'; //!!!
import routes from './api/routes';

const app = express();
const port = 3000;

// compresses all the responses
app.use(compression());

// adding set of security middlewares
app.use(helmet());

// parse incoming request body and append data to `req.body`
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable all CORS request
app.use(cors());

// HTTP request logger middleware
app.use(morgan('tiny')); 

app.use('/api/', routes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});