module.exports = class Tickets {
    constructor() {
        this.storage = [
            {
                id: 0,
                name: 'Поменять краску в принтере',
                description: 'Принтер HP LG 1220, катридж на складе',
                status: 1,
                created: '06.06.21 11:46',
            },
            {
                id: 1,
                name: 'Написать backend к домашнему заданию',
                description: 'Напишите сервер с использованием koa',
                status: 0,
                created: '06.06.21 12:46',
            },
            {
                id: 2,
                name: 'Написать frontend к домашнему заданию',
                description: 'API вами написано, пора приступить к своим прямым обязанностям - написанию фронтенда, который будет с этим API работать',
                status: 0,
                created: '07.06.21 12:47',
            }
        ];
    }

    allTickets() {
        return this.storage;
    }

    createTicket(name, description) {
        try {
            const sorted = this.storage.sort((ticket) => ticket.id);
            const id = sorted[sorted.length - 1].id + 1;
            const status = 0;
            const now = new Date();
            const day = (now.getDate() < 10) ? '0' + now.getDate() : now.getDate();
            const month = ((now.getMonth() + 1) < 10) ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;
            const hour = (now.getHours() < 10) ? '0' + now.getHours() : now.getHours();
            const minute = (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes();
            const year = now.getFullYear().toString().slice(2);
            const created = `${day}.${month}.${year} ${hour}:${minute}`;
            this.storage.push({
                id: id,
                status: status,
                name: name,
                description: description,
                created: created,
            });
            return this.getTicketById(id);
        } catch (error) {
            return new Error('Невозможно создать тикет');
        }
    }

    getTicketById(id) {
        return this.storage.find((task) => task.id === id);
    }

    changeTicketStatus(id) {
        const ticket = this.getTicketById(id);
        ticket.status = (Number(ticket.status) === 0) ? ticket.status = 1 : ticket.status = 0;
    }

    deleteTicket(id) {
        this.storage.forEach((ticket, index) => {
            if(ticket.id === id) this.storage.splice(index, 1);
        });
    }
}
