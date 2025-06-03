'use-strict';

const { Router } = require('express');
const postMessageRouter = Router();

postMessageRouter.get('/', (req, res) => res.render('form'));

module.exports = postMessageRouter;