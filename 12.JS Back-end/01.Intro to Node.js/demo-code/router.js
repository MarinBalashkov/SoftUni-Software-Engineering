const handlers = {};

function registerHandler(url, handler) {
    handler[url] = handler;
}

function match(url) {
    const currentHandler = handlers[url];

    if (currentHandler == undefined) {
        return defaultHandler;
    }else {
        return currentHandler;
    }
}

function defaultHandler(req, res) {
    res.statusCode = 404;
    res.write('Not Found!');
    res.end();
}

module.exports = {
    registerHandler, 
    match, 
};