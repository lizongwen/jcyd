let express = require('express');
let app = express();
app.use(express.static('public'));
let swig = require('swig');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);



app.get('/', (req, res, next) => {
    res.render('home/index', { title: '测试首页' })
});

app.get('/setName', (req, res, next) => {
    console.log(req.query.username)
    res.json({
        data: 123
    })
});
app.get('*', (req, res, next) => {
    res.status(404)
    res.end('404');
});
// 容错机制

app.use('*', (err, req, res, next) => {
    res.status(500);
    res.end('error...')
});

app.listen(8080)