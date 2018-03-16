const router = require('koa-router')()

router.get('/my/index', async (ctx, next) => {
  await ctx.render('my/index', {
    title: '联盟链信息_'
  })
})

router.get('/my/info', async (ctx, next) => {
  await ctx.render('my/info', {
    title: '账号设置_'
  })
})

router.get('/my/orderList', async (ctx, next) => {
  const type = ctx.query.type;
  await ctx.render('my/orderList', {
    title: '背调记录_',
    type: type
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

router.get('/my/receive/info/:id', async (ctx, next) => {
  var name = '刘小美', dept = '客服部',
    id = ctx.params.id;

  if (10002 == id) {
    name = '王帅';
    dept = '技术部';
  } else if (10003 == id) {
    name = '杜杰';
    dept = '产品部';
  }
  await ctx.render('my/receiveInfo', {
    title: '背调详情_',
    id: id,
    name: name,
    dept: dept
  })
})

router.get('/my/send/info/:id', async (ctx, next) => {
  await ctx.render('my/sendInfo', {
    title: '背调详情_'
  })
})

router.get('/my/reply/:id', async (ctx, next) => {
  var name = '刘小美', dept = '客服部',
    id = ctx.params.id;

  if (10002 == id) {
    name = '王帅';
    dept = '技术部';
  } else if (10003 == id) {
    name = '杜杰';
    dept = '产品部';
  }

  await ctx.render('my/reply', {
    title: '回复背调_',
    id: id,
    name: name,
    dept: dept
  })
})

module.exports = router
