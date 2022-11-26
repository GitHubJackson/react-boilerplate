const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const testData = require('./test.js');

const app = new Koa();
app.use(bodyParser());
app.use(router.routes());

router.get('/test', async (ctx, next) => {
  ctx.body = testData;
  await next();
});

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

app.listen(3001, () => {
  console.log('mock server is running');
});
