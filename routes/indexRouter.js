

const { Router } = require('express');
const indexRouter = Router();

const messages = [
    {
        text: 'Hi there!', 
        user: 'Amando',
        added: new Date()
    },
    {
        text: 'Hi everyone!', 
        user: 'Billy',
        added: new Date()
    },
];

indexRouter.get('/', (req, res) => res.render('index', { title: "Mini Messageboard", messages }));
indexRouter.post('/new', (req, res) => {
    const text = req.body.message;
    const user = req.body.name;

    messages.push({ text, user, added: new Date() });
    res.redirect('/');
});

module.exports = indexRouter;