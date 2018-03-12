const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const favicon = require('koa-favicon')

const session = require("koa-session2");

const index = require('./routes/index')
const users = require('./routes/users')
const my = require('./routes/my');

// error handler
onerror(app)

// middlewares

app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// locals全局变量设置
!function() {
	global.env = app.env;
	global.ts = new Date().getTime();
}();

app.use(session({
    key: "CHAINIO_SESSIONID",   //default "koa:sess"
}));

// login control
app.use(async (ctx, next) => {
	if (/^\/my\//i.test(ctx.url)) {
		if (!ctx.session.privateKey) {
			ctx.redirect(`/login?returnUrl=${ctx.url}`);
		}
	}
  await next()
})

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(my.routes(), my.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
