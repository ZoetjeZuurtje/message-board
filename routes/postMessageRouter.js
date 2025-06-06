'use-strict';

const { Router } = require('express');
const postMessageRouter = Router();

postMessageRouter.get('/', (req, res) => res.render('form', { title: 'Join the conversation' }));

module.exports = postMessageRouter;