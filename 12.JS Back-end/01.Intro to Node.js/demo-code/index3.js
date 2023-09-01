const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({
        data: 'Hi i am your first server!'
    }))
}).listen(8080);