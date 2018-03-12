const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/login', async (ctx, next) => {
  const returnUrl = ctx.query.returnUrl;
  await ctx.render('login', {
    title: '登录_',
    returnUrl: returnUrl
  })
})

router.post('/login', async (ctx, next) => {
  const privateKey = ctx.request.body.privateKey;
  const returnUrl = ctx.request.body.returnUrl;
  if ('5Jvqsujc5BWfLv7wWJAYDeyA2ShCutCrEm5jarx8GsZQkDjw8Gh' === privateKey) {
    ctx.session.privateKey = privateKey;
    ctx.body = { errorNo : 0 };
  } else {
    ctx.body = { errorNo : 1 };
  }
  await next();
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
