let http = require('http');
let server = http.createServer((req, resp) => {
    console.log(req)
    resp.writeHead(200, {
        'Content-type': 'text/plain'
    });
    resp.end('hello nodejs');
});

server.listen(8080);
console.log('nodejs server is running...');