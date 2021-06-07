const Tickets = require('./client/Tickets.js');
const http = require('http');
const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const ticket = new Tickets();


app.use(cors());

app.use(router.routes());
app.use(router.allowedMethods());
app.use(koaBody({
    urlencoded:true,
}));


// router.get('/', async (ctx) => {
//     console.log(ctx.request)
//     ctx.response.body = ctx.request.query;
// });

router.get('/allTickets', async (ctx, next) => {
    console.log(ctx.request.query)
    ctx.response.body = ticket.allTickets();
});

// router.get(`/ticketById&id=1`, async (ctx) => {
//     // const { id } = ctx.request.querystring;
//     console.log(ctx.params)
//     // ctx.response.body = request;
// });

const server = http.createServer(app.callback()).listen(7070);
