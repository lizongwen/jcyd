import Koa from 'koa';
import router from 'koa-simple-router';
import initController from './controller/initController';
import co from 'co';
import Config from './config/config';
import serve from 'koa-static';
import render from 'koa-swig';
import babel_co from 'babel-core/register';
import babel_po from 'babel-polyfill';

const app = new Koa();
app.context.render = co.wrap(render({
    root: Config.get('viewDir'),
    autoescape: true,
    cache: 'memory', // disable, set to false 
    ext: 'html',
    writeBody: false
}));
app.use(serve(Config.get('staticDir')));
initController.init(app, router);

app.listen(Config.get('port'), () => {
    console.log('server is running......')
});

export default app;