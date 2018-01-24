const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa is on Heroku FeatureBranch 1';
});

app.listen(process.env.PORT || '3000');