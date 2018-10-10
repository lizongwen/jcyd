let express = require('express');
let app = express();
let bodyParser = require('body-parser'); //前台POST请求需要的中间件模块
//let router = require('router'); //路由模块


let swig = require('swig'); //后台模板引擎
app.set('view engine', 'html');
app.engine('html', swig.renderFile);


// 中间件写在路由之前
//中间件分应用级中间件，路由级中间件、错误处理中间件、内置中间件、第三方中间件
app.use(express.static('public')); //自带的静态文件中间件模块

app.use(bodyParser.urlencoded({ //加载第三方的中间件模块
    extended: false
}))
app.use((req, resp, next) => { //自定义应用级中间件use参数是函数的时候必须用next方法
    console.log('必经路由');
    next();
});


// 路由

app.get('/middleware', (req, resp, next) => { //应用级中间件
    req.data = 999;
    next();
}, (req, resp, next) => { //next方法可用可不用
    //resp.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    //resp.end(req.data.toString()) //resp.end参数必须是string或者是buffer类型

    // 或者用下列方法
    resp.set({
        'Content-type': 'text/plain',
        'charset': 'utf-8',
    });
    resp.send(req.data.toString())
});


app.get('/', (req, resp) => {
    let usename = req.query.usename; // 第一种路由获取请求参数方式
    //resp.sendStatus(999) //数字必须用sendStatus方法
    //resp.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    resp.send('hello express   ' + usename); //resp.send参数必须是stirng或者是buffer类型

});

app.get('/:usename/:password', (req, resp) => {
    let usename = req.params.usename; // 第二种路由获取请求参数方式
    let password = req.params.password;
    resp.send('hello express   ' + usename + password);
});

app.get('/index', (req, resp) => {
    resp.sendFile(__dirname + '/views/index.html'); //直出html
});

app.get('/moban', (req, resp) => {
    resp.render('home', { title: '测试首页' }); //模板渲染
});

app.post('/', (req, resp) => {
    resp.send('2');
});

app.get('/json', (req, resp) => {
    var obj = {
        name: 'cl'
    }
    resp.json(obj); //返回JSON
});

app.post('/getName', (req, resp) => {
    let usename = req.body.usename; //post接受参数
    resp.send('姓名：' + usename);
});



app.listen('8080', () => {
    console.log('接口已经启动...');
});