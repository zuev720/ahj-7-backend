const Tickets = require('./components/Tickets.js');
const http = require('http');
const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const ticket = new Tickets();


app.use(koaBody({
    urlencoded: true,
}));
app.use(cors());

app.use(router.routes());
app.use(router.allowedMethods());


router.get('/', async (ctx) => {
    const {method} = ctx.request.query;
    if (method === 'allTickets') {
        ctx.response.body = ticket.allTickets();
        return;
    }
    if (method === 'ticketById') {
        const { id } = ctx.request.query;
        ctx.response.body = ticket.getTicketById(Number(id));
        return
    }
    if (method === 'changeTicketStatus') {
        const { id } = ctx.request.query;
        ticket.changeTicketStatus(Number(id));
        ctx.response.body = JSON.stringify(ticket.getTicketById(Number(id)));
        return
    }
    if (method === 'getTicketDescription') {
        const { id } = ctx.request.query;
        const description = ticket.getTicketById(Number(id)).description;
        ctx.response.body = JSON.stringify(description);
        return
    }
    ctx.response.body = 'app works!';
});

router.post('/', async (ctx) => {
    const {method} = ctx.request.query;
    if (method === 'createTicket') {
        const {name, description} = ctx.request.body;
        const ticketResponse = ticket.createTicket(name, description);
        ctx.response.body = JSON.stringify(ticketResponse);
        return
    }
    if (method === 'changeTicket') {
        const {name, description, id} = ctx.request.body;
        ticket.getTicketById(Number(id)).name = name;
        ticket.getTicketById(Number(id)).description = description;
        ctx.response.body = JSON.stringify({id: id, name: name});
        return
    }
    if (method === 'deleteTicket') {
        const { id } = ctx.request.body;
        ticket.deleteTicket(Number(id));
        ctx.response.body = JSON.stringify(Number(id));
    }
});
const port = process.env.PORT || 7070;
const server = http.createServer(app.callback()).listen(port);
