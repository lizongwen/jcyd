let koa = require('koa');
let app = new koa();

// 中间件
app.use(function*(next) {
    let start = new Date;
    yield next;
    let ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms'); //设置头部响应时间
});

app.use(function*(next) {
    let start = new Date;
    yield next;
    let ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(function*() {
    // 路由
    let controller = this.request.path; //this代表上下文环境ctx，request和response对象挂载在下面
    if (controller == '/index' || controller == '/index/') {
        this.cookies.set('name', 'lzw', { //后台设置cookies
            signed: false
        });
        console.log(this.cookies.get('name')); //后台读取cookies
        this.response.body = { //输出JSON内容
            name: 'lzw'
        }
        console.log(this.query) //获取请求过来的参数对象
    } else if (controller == '/test' || controller == '/test/') {
        this.body = 'hello test' //输出字符串内容
    } else {
        this.throw(404, 'request error'); //抛出状态错误
    }


});
app.listen('8080');