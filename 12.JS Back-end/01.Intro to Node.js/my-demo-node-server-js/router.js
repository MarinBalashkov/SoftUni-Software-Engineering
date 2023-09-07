const staticFile = require('./controllers/static');
const handlers = {};

function registerHandler(method, url, handler) {
    if (handlers[url] == undefined) {
        handlers[url] = {};
    }

    handlers[url][method] = handler;
}

function match(method, url) {
    if (method == 'GET' && url.startsWith('/static/')) {
        return staticFile;
    }

    const methods = handlers[url] || {};

    const handler = methods[method];

    if (handler == undefined) {
        return defaultHandler;
    }else {
        return handler;
    }
}

function defaultHandler(req, res) {
    console.log('>>>' + res.method + res.pathname)
    res.writeHead(404, 'Not Found');
    res.write('Not Found!');
    res.end();
}

module.exports = {
    registerHandler, 
    match, 
    get: (...params) => registerHandler('GET', ...params), 
    post: (...params) => registerHandler('POST', ...params), 
    delete: (...params) => registerHandler('DELETE', ...params), 
};