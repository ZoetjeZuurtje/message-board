'use-strict';

const { Router } = require('express');
const postMessageRouter = Router();

postMessageRouter.get('/', (req, res) => res.render('form', { title: 'Mini Messageboard | Create new post' }));

module.exports = postMessageRouter;