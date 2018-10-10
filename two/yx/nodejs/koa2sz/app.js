const Koa = require('koa');
const router = require('koa-simple-router');
const serve = require('koa-static');
const path = require('path');
const render = require('koa-swig');
const co = require('co');
const app = new Koa();

app.context.render = co.wrap(render({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    cache: 'memory', // disable, set to false 
    ext: 'html',
    writeBody: false
}));


app.use(router(_ => {
    _.get('/', (ctx, next) => {
        ctx.body = 'hello'
    })
    _.get('/index', async(ctx, next) => {
        ctx.body = await ctx.render('index.html')
    })
}));

// app.use(ctx => {
//     ctx.body = 'hello koa2';
// });
app.use(serve(path.join(__dirname, './public')));
app.listen('8080', () => {
    console.log('server is running...');
});