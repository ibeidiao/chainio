const router = require('koa-router')()

router.get('/my/info', async (ctx, next) => {
  await ctx.render('my/info', {
    title: '账号信息_'
  })
})

router.get('/my/orderList', async (ctx, next) => {
  await ctx.render('my/orderList', {
    title: '背调记录_'
  })
})

module.exports = router
