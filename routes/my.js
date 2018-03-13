const router = require('koa-router')()

router.get('/my/index', async (ctx, next) => {
  await ctx.render('my/index', {
    title: '联盟概况_'
  })
})

router.get('/my/info', async (ctx, next) => {
  await ctx.render('my/info', {
    title: '账号设置_'
  })
})

router.get('/my/orderList', async (ctx, next) => {
  await ctx.render('my/orderList', {
    title: '背调记录_'
  })
})

router.get('/my/receive', async (ctx, next) => {
  await ctx.render('my/receive', {
    title: '收到背调_'
  })
})

router.get('/my/send', async (ctx, next) => {
  await ctx.render('my/send', {
    title: '发起背调_'
  })
})

router.get('/my/points', async (ctx, next) => {
  await ctx.render('my/points', {
    title: '背调积分_'
  })
})

module.exports = router
