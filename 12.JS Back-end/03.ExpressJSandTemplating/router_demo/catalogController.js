const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('catalog page');
});

router.post('/', (req, res) => {
    res.send('catalog page');
});

router.post('/*/details', (req, res) => {
    res.send('catch /catalog/allPaths/details');
});

router.post('/*', (req, res) => {
    res.send('catch /catalog/allPaths');
});

router.post('/:productId', (req, res) => {
    res.send(req.params); //
});

module.exports = router;