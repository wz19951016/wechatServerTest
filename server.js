const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');

const router = new Router();
router.get('/reciveMessage', (ctx, next) => {
    console.log(ctx);
})

app
.use(router.routes())
.use(router.allowedMethods());

app.listen(8899)