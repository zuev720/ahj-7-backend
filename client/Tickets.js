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
}
