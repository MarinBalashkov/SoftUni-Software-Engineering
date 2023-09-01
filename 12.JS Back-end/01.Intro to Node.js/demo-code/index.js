const http = require('http');

const port = 3000;
const html = `
<html>
    <body>
        <div>
        <h1>My Server</h1>
        </div>
    </body>
</html>
`;


const server = http.createServer((req, res) => {
    console.log('>>>' + req.url + req.headers);
    res.write(html);
    res.end();
})

server.listen(port, () => console.log('Server listening on port' + port));
