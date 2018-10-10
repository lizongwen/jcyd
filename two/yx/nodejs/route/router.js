const router = function(pathname, resp) {
    console.log(pathname)
    resp.writeHead(200, {
        'Content-type': 'text/plain;charset=utf-8'
    });
    if (pathname == '/') {
        resp.write('url路径名是:' + pathname + '这是根路径')
    } else if (pathname == '/index' || pathname == '/index/') {
        resp.write('url路径名是:' + pathname + '这是index主页')
    } else {
        resp.write('404')
    }
    resp.end();
}
exports.router = router;