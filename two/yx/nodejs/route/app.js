let http = require('http');
let url = require('url');
const start = (router) => {
    let server = http.createServer((req, resp) => {
        let pathname = url.parse(req.url).pathname;
        router(pathname, resp)
    });
    server.listen(8080);
    console.log('nodejs server is running...');
}


exports.start = start;