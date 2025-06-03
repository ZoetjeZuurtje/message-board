'use-strict';

require('dotenv').config();
const path = require('node:path');
const express = require('express');
const indexRouter = require('./routes/indexRouter');
const postMessageRouter = require('./routes/postMessageRouter');

const app = express();
const assetsPath = path.join(__dirname, 'public');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(assetsPath)); 
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', postMessageRouter);

const PORT = process.env.PORT || 3000
app.listen(PORT)