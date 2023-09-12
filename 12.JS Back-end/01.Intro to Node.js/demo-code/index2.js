const http = require('http');
const router = require('./router.js');

router.registerHandler('./', (req, res) => {
    res.write(homePage);
    res.end();
});

const port = 3000;
const homePage = `
<html>
    <body>
        <div>
        <h1>My Server</h1>
        </div>
    </body>
</html>
`;


const server = http.createServer((req, res) => {
    req.
    console.log('>>>' + req.url + req.headers);
    const handler = router.match(req.url);
    handler(req, res);
})

server.listen(port, () => console.log('Server listening on port' + port));