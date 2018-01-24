const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa is on Heroku';
});

app.listen(process.env.PORT || '3000');