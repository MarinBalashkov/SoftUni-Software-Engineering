const http = require('http');
const router = require('./router')

const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');

router.get('/', homeController);
router.get('/', catalogController);
router.post('/create', createController);



const port = 3000;
const server = http.createServer(requestHandler);

function requestHandler(req, res) {
    console.log(`>>> ${req.method} ${req.pathname}`);
    const url = new URL(req.url, 'http://localehost');
    const handler = router.match(req.method, url.pathname);
    handler(req, res);
}

server.listen(port, () => {console.log('Server listening on port' + port)});