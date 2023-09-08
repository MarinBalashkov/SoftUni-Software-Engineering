const http = require('http');

const router = require('./router')

const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');
const deleteController = require('./controllers/deleteController');
const uploadController = require('./controllers/uploadController');
const aboutController = require('./controllers/aboutController');


router.get('/', homeController);
router.get('/catalog', catalogController);
router.post('/create', createController);
router.get('/delete', deleteController);
router.post('/upload', uploadController);
router.get('/about', aboutController);


const port = 3000;
const server = http.createServer(requestHandler);

function requestHandler(req, res) {
    console.log(`>>> ${req.method} ${req.pathname}`);
    const url = new URL(req.url, 'http://localehost');
    const handler = router.match(req.method, url.pathname);
    handler(req, res);
}

server.listen(port, () => {console.log('Server listening on port' + port)});