const http = require('http');

const router = require('./router');

const homeController = require('./controllers/homeController');
const addBreedController = require('./controllers/addBreedController');
const createBreedController = require('./controllers/createBreedController');
const addCatController = require('./controllers/addCatController');
const createCatController = require('./controllers/createCatController');

const deleteController = require('./controllers/deleteController');
const uploadController = require('./controllers/uploadController');

router.get('/', homeController);
router.get('/addBreed', addBreedController);
router.post('/createBreed', createBreedController);
router.get('/addCat', addCatController);
router.post('/createCat', createCatController);


// router.get('/delete', deleteController);

// router.post('/upload', uploadController);

const port = 3000;
const server = http.createServer(requestHandler);

function requestHandler(req, res) {
    const url = new URL(req.url, 'http://localhost');
    console.log('>>>', req.method, req.url);
    const handler = router.match(req.method, url.pathname);
    handler(req, res);
}

server.listen(port, () => console.log('Server listening on port ' + port));